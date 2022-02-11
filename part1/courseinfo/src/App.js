import React from 'react';

const Header = (props) => (
  <h1>{props.course}</h1>
);

const Part = (props) => (
  <p>
    {props.name} {props.exerciseNum}
  </p>
)

const Content = (props) => (
  <div>
    <Part name={props.part1} exerciseNum= {props.exercises1}></Part>
    <Part name={props.part2} exerciseNum= {props.exercises2}></Part>
    <Part name={props.part3} exerciseNum= {props.exercises3}></Part>
  </div>
);

const Total = (props)=>(
  <p>Number of exercises {props.total}</p>
)

const App = ()=>{
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App;
