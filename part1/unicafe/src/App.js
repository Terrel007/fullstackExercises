import React, { useState } from 'react';

const Button = (props)=> (
    <button type="button" onClick={props.onClick}>{props.text}</button>
);

const StatisticLine = ({text,value}) =>(
    <tr>
        <td>{text}</td> 
        <td>{value}</td>
    </tr>
);


const Statistics = ({result}) => {
    const [good,neutral,bad] = result;
    const all = good+neutral+bad;
    if(all === 0) {
        return <p>No feedback given</p>
    }
    return (
        <table>
            <tbody>
                <StatisticLine text="good" value={good}/>
                <StatisticLine text="neutral" value={neutral}/>
                <StatisticLine text="bad" value={bad}/>
                <StatisticLine text="all" value={all}/>
                <StatisticLine text="average" value={(good+bad*-1)/all}/>
                <StatisticLine text="positive" value={`${(good/all)*100} %`}/>
            </tbody>
        </table>
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
            <h2>statistics</h2>
            <Statistics result={[good,neutral,bad]}/>
        </div>
    );
}

export default App;