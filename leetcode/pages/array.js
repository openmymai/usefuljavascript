import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Array = () => {
  // Max Consecutive Ones
  const [ array, setArray ] = useState([])
  const [ input, setInput ] = useState([])

  const saveInput = e => {
    // + for changing string to number
    setInput(+e.target.value)
  }

  const addNewItem = () => {
    setArray(prevState => [...prevState, input])
  }

  // Find Max Consecutive Ones
  var findMaxConsecutiveOnes = (nums) => {
    let count = 0
    let result = 0
    nums.map(num => {
      if (num == 0) {
        count = 0
      } else {
        count++
        result = Math.max(result, count)
      }
    })
    return result
  }

  // Find Number with even number of digits
  const [ arr, setArr ] = useState([])
  const [ evennum, setEvennum ] = useState([])

  const saveInputEvenNum = e => {
    setEvennum(+e.target.value)
  }

  const addNewEvenNumItem = () => {
    setArr(prevState => [...prevState, evennum])
  }

  // Find Numbers with Even Number of Digits
  var findNumbersWithEvenNum = (nums) => {
    var count = 0
    nums.map(num => {
      let digit = 0
      if(num)
      while(num>0) {
        digit++
        num = parseInt(num/10)
      }
      if (digit%2 === 0)
        count++
    })
    return count
  }

  // Sorted Square
  var sortSquare = (nums) => {
    return nums.map(x => {
      return x*x
    }).sort((a,b) => {
      return a-b
    })
  }

  return (
    <div>
      <br />
      <h3>Max consecutive ones of: {JSON.stringify(array)}</h3>
      <Form>
        <Form.Group>
        <Row>
          <Col xs={2}>
            <Form.Control type="string" onChange={saveInput} />
          </Col>
          <Col>
            <Button variant="primary" onClick={addNewItem}>Add Item</Button>
          </Col>
        </Row>
        </Form.Group>
      </Form>
      <h3>Max Consecutive Ones is {findMaxConsecutiveOnes(array)}</h3>
      <hr />

      <br />
      <h3>Even Number: {JSON.stringify(arr)}</h3>
      <Form>
        <Form.Group>
        <Row>
          <Col xs={2}>
            <Form.Control type="string" onChange={saveInputEvenNum} />
          </Col>
          <Col>
            <Button variant="primary" onClick={addNewEvenNumItem}>Add Item</Button>
          </Col>
        </Row>
        </Form.Group>
      </Form>
      <h3>Number of digits of even number: {findNumbersWithEvenNum(arr)}</h3>
      <hr />

      <br />
      <h3>Array: {JSON.stringify(arr)}</h3>
      <h3>Number of digits of even number: {JSON.stringify(sortSquare(arr))}</h3>
      <hr />
    </div>
  )
}

export default Array