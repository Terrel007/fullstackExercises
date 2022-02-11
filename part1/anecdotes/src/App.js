import React, { useState } from 'react';

const Anecdote = ({text,vote})=>{
  return (
    <>
      <p>{text}</p>
      <p>has {vote} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the devleopment time',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const len = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    const newSelected = Math.floor(Math.random()*len);
    setSelected(newSelected);
  };
  const arr = Array.from({length:len},()=>0);
  const [votes, setVotes] = useState(arr);
  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected]+=1;
    setVotes(copyVotes);
  }

  const maxVote = Math.max(...votes);
  const maxVoteIndex = votes.indexOf(maxVote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} vote={votes[selected]}/>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Anecdote text={anecdotes[maxVoteIndex]} vote={maxVote}/>
    </div>
  )
}

export default App;
