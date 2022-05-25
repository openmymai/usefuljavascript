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


  // Duplicate Zeros
  var duplicateZeros = (array) => {
    array = [1,0,3,4,0,5,6,0,2]
    for (let i=0;i<array.length;i++) {
      if (array[i]==0) {
        array.splice(i,0,0)
        array.pop()
        i++
      }
    }
    return array
  }

  // Merge Sorted Array
  var merge = function (nums1, m, nums2, n) {
    nums1=[1,2,3,0,0,0]
    m=+3
    nums2=[2,5,6]
    n=+3
    m--
    n--
    let i=nums1.length-1
    while(i>=0) {
      if(n>-1&&m>-1&&nums[m]>=nums2[n]) {
        nums1[i] = nums1[m]
        nums1[m] = nums2[n]
        m--
      }
      else if (n>-1){
        nums1[i]=nums2[n--]
      }
      i--

    }
  }
  return (
    <div>
      <br />
      <h4>Max consecutive ones of: {JSON.stringify(array)}</h4>
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
      <h4>Max Consecutive Ones is {findMaxConsecutiveOnes(array)}</h4>
      <hr />

      <br />
      <h4>Even Number: {JSON.stringify(arr)}</h4>
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
      <h4>Number of digits of even number: {findNumbersWithEvenNum(arr)}</h4>
      <hr />

      <br />
      <h4>Array: {JSON.stringify(arr)}</h4>
      <h4>Number of digits of even number: {JSON.stringify(sortSquare(arr))}</h4>
      <hr />

      <br />
      <h4>Duplicate Zeros Array: {JSON.stringify([1,0,3,4,0,5,6,0,2])}</h4>
      <h4>Duplicate Zero: {JSON.stringify(duplicateZeros(array))}</h4>
      <hr />

      <br />
      <h4>Merge Sorted Array: {JSON.stringify(merge)}</h4>
    </div>
  )
}

export default Array