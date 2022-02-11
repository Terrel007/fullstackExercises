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
    <Part name={props.parts[0].name} exerciseNum= {props.parts[0].exercises}></Part>
    <Part name={props.parts[1].name} exerciseNum= {props.parts[1].exercises}></Part>
    <Part name={props.parts[2].name} exerciseNum= {props.parts[2].exercises}></Part>
  </div>
);

const Total = (props)=>(
  <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
)

const App = ()=>{
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    }, 
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App;
