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
  return (
    <div>
      <h2>statistics</h2>
      <p></p>
      <p>good {props.good} </p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {total}</p>
      <p>average {(props.good -props.bad) / total}</p>
      <p>positive {(props.good / total)*100} %</p>
    </div>
  )
}

export default App
