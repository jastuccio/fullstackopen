import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Content from './Content'
// import Total from './Total'

const App = (props) => {
  const course = {
    name: 'Half Stack application development',
    lessons: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 return (
    <>
      <Header courseName={course.name} />
      {/* <Content parts={course.lessons} /> */}
      <Content />
      
      {/* <Total {...{exercises1, exercises2, exercises3}} /> */}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))