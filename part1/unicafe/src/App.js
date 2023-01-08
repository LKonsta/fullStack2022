import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Form 
        handleGoodClick={handleGoodClick} 
        handleNeutralClick={handleNeutralClick} 
        handleBadClick={handleBadClick}
      />
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}

const Form = (props) => {
  return (
    <div>
      <Button handleClick={props.handleGoodClick} text='good' />
      <Button handleClick={props.handleNeutralClick} text='neutral' />
      <Button handleClick={props.handleBadClick} text='bad' />
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  if (total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p></p>
        <p>no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <p></p>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={total} />
      <StatisticsLine text="average" value={(props.good - props.bad) / total} />
      <StatisticsLine text="positive" value={(props.good / total)*100} />
    </div>
  )
}

const StatisticsLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

export default App
