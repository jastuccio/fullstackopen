import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Content from './Content'
// import Total from './Total'

const App = (props) => {
  const course = 'Half Stack application development'

 return (
    <>
      <Header course = {course} />
      <Content
        part1 = 'Fundamentals of React'
        part2 = 'Using props to pass data'
        part3 = 'State of a component'
        exercises1 = {10}
        exercises2 = {7}
        exercises3 = {14}
      />
      <Total 
        exercises1 = {10}
        exercises2 = {7}
        exercises3 = {14}
      />
      
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))