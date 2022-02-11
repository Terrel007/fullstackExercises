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
    <Part name={props.part1.name} exerciseNum= {props.part1.exercises}></Part>
    <Part name={props.part2.name} exerciseNum= {props.part2.exercises}></Part>
    <Part name={props.part3.name} exerciseNum= {props.part3.exercises}></Part>
  </div>
);

const Total = (props)=>(
  <p>Number of exercises {props.total}</p>
)

const App = ()=>{
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part1} part3={part3} />
      <Total total={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

export default App;
