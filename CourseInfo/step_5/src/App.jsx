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
// It receives the 'parts' array from the main course object.
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
  // Course and parts are now consolidated into a single JavaScript object
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      {/* Pass the name property of the course object */}
      <Header course={course.name} />
      
      {/* Pass the parts array property of the course object */}
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
