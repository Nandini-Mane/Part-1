import React from 'react'

// Component 1: Renders the course name
const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

// Component 2: Renders a single part (name and exercise count)
const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

// Component 3: Renders all the content parts
// It now receives the 'parts' array and manually renders three Part components.
const Content = (props) => {
  return (
    <div>
      {/* Assuming there are always three parts, access them by index */}
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

// Component 4: Renders the total number of exercises
// It calculates the total by summing the exercises from the 'parts' array.
const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p><strong>Number of exercises {total}</strong></p>
  )
}

const App = () => {
  // Course and parts are now defined in the required array structure
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
    name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      {/* Pass the array directly */}
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
