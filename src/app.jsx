import React from 'react';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot, collection, query, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

// The global variables are provided by the canvas environment and should not be modified.
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// The Header component displays the course name.
const Header = ({ course }) => {
  // A useful tip from the exercise: you can log the props to the console to inspect their structure.
  console.log("Header props:", { course });
  return <h1 className="text-3xl font-bold mb-4 text-center">{course}</h1>;
};

// The Part component displays the name and exercise count for a single part.
const Part = ({ part }) => {
  console.log("Part props:", { part });
  return (
    <div className="flex justify-between py-1 border-b border-gray-200">
      <p className="text-lg">{part.name}</p>
      <p className="text-lg font-semibold">{part.exercises}</p>
    </div>
  );
};

// The Content component renders the list of parts.
const Content = ({ parts }) => {
  console.log("Content props:", { parts });
  return (
    <div className="w-full">
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

// The Total component calculates and displays the total number of exercises.
const Total = ({ parts }) => {
  console.log("Total props:", { parts });
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div className="mt-4 pt-4 border-t-2 border-gray-300">
      <p className="text-xl font-bold text-center">
        Total number of exercises: {total}
      </p>
    </div>
  );
};

// The main App component that holds the course data and renders all other components.
const App = () => {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const database = getFirestore(app);
    const authentication = getAuth(app);
    setDb(database);
    setAuth(authentication);

    const unsubscribe = onAuthStateChanged(authentication, async (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        try {
          // If no user is logged in, use the custom token or sign in anonymously.
          if (initialAuthToken) {
            await signInWithCustomToken(authentication, initialAuthToken);
          } else {
            await signInAnonymously(authentication);
          }
          setUserId(authentication.currentUser.uid);
        } catch (error) {
          console.error("Firebase Auth Error:", error);
        }
      }
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  // Course data as a JavaScript object with nested parts.
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    </div>
  );
};

export default App;
