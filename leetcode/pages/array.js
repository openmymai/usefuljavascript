import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Array = () => {
  // Max Consecutive Ones
  const [ array, setArray ] = useState([])
  const [ input, setInput ] = useState([])

  const saveInput = e => {
    // + for change string to number
    setInput(+e.target.value)
  }

  const addNewItem = () => {
    setArray(prevState => [...prevState, input])
  }

  var findMaxConsecutiveOnes = (nums) => {
    let count = 0
    let result = 0
    for (let i=0; i<nums.length;i++) {
      if(nums[i]==0) {
        count = 0
      } else {
        count++
        result = Math.max(result,count)
      }
    }
    return result
  }


  return (
    <div>
      <br />
      <h3>Max consecutive ones of</h3>
      <br />
      <Form>
        <Form.Group>
        <Row>
          <Col xs={2}>
            <Form.Control type="string" onChange={saveInput} />
          </Col>
        </Row>
        </Form.Group>
        <br />
        <Button variant="primary" onClick={addNewItem}>Add Item</Button>
        
      </Form>
      <br />
      <h3>{JSON.stringify(array)}</h3>
      <br />
      <h3>Max Consecutive Ones is {findMaxConsecutiveOnes(array)}</h3>
      <hr />
    </div>
  )
}

export default Array