import React, { useState } from 'react';

const Button = (props)=> (
    <button type="button" onClick={props.onClick}>{props.text}</button>
);

const StatisticsItem = ({type,count}) =>(
    <li>{type} {count}</li>
);

const Statistics = ({result}) => {
    const [good,neutral,bad] = result;
    return (
        <div>
            <h2>statistics</h2>
            <StatisticsItem type="good" count={good}/>
            <StatisticsItem type="neutral" count={neutral}/>
            <StatisticsItem type="bad" count={bad}/>
        </div>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" onClick={()=>setGood(prevGood=>prevGood+1)}/>
            <Button text="neutral" onClick={()=>setNeutral(prevNeutral=>prevNeutral+1)}/>
            <Button text="bad" onClick={()=>setBad(prevBad=>prevBad+1)}/>
            <Statistics result={[good,neutral,bad]}/>
        </div>
    );
}

export default App;