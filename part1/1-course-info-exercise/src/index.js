import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const  part3 = 'State of a component'
  const  exercises1 = 10
  const  exercises2 = 7
  const  exercises3 = 14

 return (
    <>
      <Header course ={course} />
      <Content {...{part1, part2, part3, exercises1, exercises2, exercises3}}
      />
      <Total {...{exercises1, exercises2, exercises3}} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))