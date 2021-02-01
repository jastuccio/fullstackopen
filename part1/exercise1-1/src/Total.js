import React from 'react'

const Total = (props) => {
  const {exercises1, exercises2, exercises3} = props
  return (
    <p>Total {exercises1 + exercises2 + exercises3}</p>
  )}

  export default Total