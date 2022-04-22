import React from 'react'
import { Container } from 'react-bootstrap'

const App = () => {
  var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

  var str = "hello"
  const spreadStr = [...str]

  // Spread Operator
  const spreadMatrix = [...matrix]
  // Matrix Clockwise Rotate 90 degree 
  const matrixClock = matrix[0].map((col,index) => matrix.map(row => row[index]).reverse())
  // Matrix Anti Clockwise Rotate 90 degree 
  const matrixAntiClock = matrix[0].map((col, index) => matrix.map(row => row[matrix.length - 1 - index]))

  return (
    <div>
      <br />
      <hr />
      <Container>
        <h1>Original Array</h1>
        <br />
        {JSON.stringify(matrix)}
        <br />
        <h1>Rotate Matrix Clockwise 90 degree</h1>
        <br />
        {JSON.stringify(matrixClock)}
        <br />
        <h1>Rotate Matrix Anti Clockwise 90 degree</h1>
        <br />
        {JSON.stringify(matrixAntiClock)}
        <br />
        {JSON.stringify(spreadMatrix.join(" "))}
        <br />
        {spreadStr.join(" ")}
        <br />
      </Container>
      <hr />
    </div>
  )
}

export default App