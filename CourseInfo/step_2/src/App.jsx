import React from 'react'

// Component 1: Renders the course name
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// Component 2: Renders a single part (name and exercise count)
const Part = ({ part, exercises }) => {
  // This component handles the rendering of the name and number of exercises
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

// Component 3: Renders all the content parts
// It only renders three Part components, passing the data as props.
const Content = (props) => {
  return (
    <div>
      {/* Refactored to only render three Part components */}
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
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
  // All data still resides here in App
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const totalExercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={totalExercises} />
    </div>
  )
}

export default App
