import { useState } from "react";


const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td> 
    </tr>
  )
}

const Statistics = ({statisticsData}) => {
  const [good, neutral, bad, all, average, positive] = statisticsData
  const hasFeedback = all
  return(
    <div>
      <h3>statistics</h3>
      {
        hasFeedback ? 
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${positive} %`} />
          </tbody>
        </table>
        

        :
        <p>No feedback given</p>
      }
      
    </div>
  )
}

const Button = ({onClick, text}) => 
  <button onClick={onClick}>{text}</button>

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  const statisticsData = [good, neutral, bad, all, average, positive]
  
  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button onClick={() => setGood(good + 1)} text="good"/>
        <Button onClick={() => setNeutral(neutral+ 1)} text="neutral"/>
        <Button onClick={() => setBad(bad + 1)} text="bad"/>
      </div>

      <Statistics statisticsData={statisticsData}/>

    </div>
  )
}

export default App