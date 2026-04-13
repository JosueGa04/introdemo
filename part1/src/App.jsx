import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive}/>
      <StatisticLine text="votes" value={props.votes}/>
    </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)

  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)

  }
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)

  }

  const calculateAverage = () => {
    const rate = (good * 1 ) + (neutral * 0) + (bad * -1)
    return rate/all
  }
  const calculatePositive = () => {
    return (good/all) * 100
  }

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    setVotes(votes.map((vote, index) => index === selected ? vote + 1 : vote))
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text="good"/>
      <Button onClick={handleNeutral} text="neutral"/>
      <Button onClick={handleBad} text="bad"/>
      <h2>Statics</h2>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} average={calculateAverage()} positive={calculatePositive()}/>
        </>
      )}
      <h2>Most voted anecdote</h2>
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
      <p>has {Math.max(...votes)} votes</p>
      <h2>Anecdote of the day</h2>
      <Button onClick={handleRandom} text="random anecdote"/>
      <Button onClick={handleVote} text="vote"/>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

export default App