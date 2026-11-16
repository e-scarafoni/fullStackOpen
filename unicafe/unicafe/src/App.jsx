import { useState } from 'react'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr> 
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


const Statistics = ({good, neutral, bad, all, average, positivePercentage}) => { 
  return (
    all === 0 ? (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
      ) :
      (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${positivePercentage}%`} />
          </tbody>
        </table>
      </div>
      )
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    const newAll = all + 1
    setGood(newGood)
    setAll(newAll)
    const avg = calculateAverage(newGood, bad, newAll)
    const positive = calculatePositivePercentage(newGood, newAll)
    setAverage(avg)
    setPositivePercentage(positive)
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1
    const newAll = all + 1
    setNeutral(newNeutral)
    setAll(newAll)
    const avg = calculateAverage(good, bad, newAll)
    const positive = calculatePositivePercentage(good, newAll)
    setAverage(avg)
    setPositivePercentage(positive)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    const newAll = all + 1
    setBad(newBad)
    setAll(newAll)
    const avg = calculateAverage(good, newBad, newAll)
    const positive = calculatePositivePercentage(good, newAll)
    setAverage(avg)
    setPositivePercentage(positive)
  }

  const calculateAverage = (good, bad, all) => {
    if(all === 0) {
      return 0
    }
    let totalScore = (good * 1) + (bad * -1)
    return totalScore / all
  }

  const calculatePositivePercentage = (good, all) => {
    if(all === 0) {
      return 0
    }
    return (good / all) * 100
  }

  return (
    <div>
      <>
          <h1>give feedback</h1>
          <Button onClick={handleGoodClick} text="good" />
          <Button onClick={handleNeutralClick} text="neutral" />
          <Button onClick={handleBadClick} text="bad" />
      </>

      <>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positivePercentage={positivePercentage}
        />
      </>

    </div>
  )
}

export default App