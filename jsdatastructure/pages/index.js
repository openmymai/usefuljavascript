import React from 'react'
import { Container } from 'react-bootstrap'

const App = () => {
  var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]

  const matrixReverse = matrix[0].map((col,index) => matrix.map(row => row[index]).reverse())

  return (
    <div>
      <br />
      <hr />
      <Container>
        Original
        <br />
        {JSON.stringify(matrix)}
        <br />
        Rotate Matrix Clockwise 90 degree
        <br />
        {JSON.stringify(matrixReverse)}
      </Container>
      <hr />
    </div>
  )
}

export default App