import { useState } from 'react'

const Statistics = ({good, neutral, bad, all, average, positivePercentage}) => { 
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positivePercentage}%</p>
    </div>
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
    const positive = calculatePositivePercentage(good, newAll)
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
          <button onClick={handleGoodClick}>good</button>
          <button onClick={handleNeutralClick}>neutral</button>
          <button onClick={handleBadClick}>bad</button>
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