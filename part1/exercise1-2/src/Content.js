import React from 'react'

const Part = ({part, exercises}) => {
  return (
    <p>{part} {exercises}</p>
  )
}

const Content = ({lessons}) => {
  return (
    <>
    {lessons.map((lesson, acc) => (
      <Part
        lesson={lesson.name}
        exercises={lesson.exercises}
        key={lesson.name.slice(0,3) + acc }
      />
    ))}

    <Part part='p1' exercises={12}/>
    <Part part='p2' exercises={11}/>
  </>

  )}

  export default Content
 