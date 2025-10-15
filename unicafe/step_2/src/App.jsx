import React, { useState } from 'react'

// Component for a single Statistic line (e.g., "good 6")
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Component to display all statistics
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  
  // If no feedback has been given, display a message
  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  // Calculate averages and percentages
  const average = (good - bad) / total
  const positivePercentage = (good / total) * 100

  // Display the statistics in a table for clean alignment
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          {/* Use .toFixed(2) for better formatting of averages/percentages */}
          <StatisticLine text="average" value={average.toFixed(2)} /> 
          <StatisticLine text="positive" value={positivePercentage.toFixed(2) + " %"} />
        </tbody>
      </table>
    </div>
  )
}

// Component for a feedback button
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} className="mr-2 px-3 py-1 border rounded shadow-sm hover:bg-gray-100 transition duration-150">
    {text}
  </button>
)

const App = () => {
  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Event handlers to update state
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div className="p-4 font-sans max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">give feedback</h1>

      {/* Feedback Buttons */}
      <div className="flex space-x-2 mb-8">
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
      </div>

      {/* Statistics Display */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
