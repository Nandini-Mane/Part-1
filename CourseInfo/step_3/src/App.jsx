import React from 'react'

// Component 1: Renders the course name
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// Component 2: Renders a single part (name and exercise count)
// Now pulls name and exercises directly from the 'part' object prop
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

// Component 3: Renders all the content parts
// Now passes the full part objects as props
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

// Component 4: Renders the total number of exercises
const Total = (props) => {
  return (
    <p><strong>Number of exercises {props.total}</strong></p>
  )
}

const App = () => {
  // Data is now defined using objects
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const totalExercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        part2={part2}
        part3={part3} 
      />
      <Total total={totalExercises} />
    </div>
  )
}

export default App
