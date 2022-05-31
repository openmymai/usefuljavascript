import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Array = () => {
  // Max Consecutive Ones
  const [ array, setArray ] = useState([])
  const [ input, setInput ] = useState([])

  const saveInput = e => {
    // + for changing string to number
    const re = /^[0-1\b]+$/

    if (e.target.value === '' || re.test(e.target.value)) {
      setInput(+e.target.value)
    }
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

  // Remove Element
  var removeElement = (nums, val) => {
    var len = nums.length
    var count = 0
    for (let i=0; i<len; i++){
      if (nums[i] !== val)
        nums[count++] = nums[i]
    }
    return count
  }
  var removeElementFilter = (nums, val) => {
    return nums.filter(num => num !== val)
  }

  // Remove Duplication
  var removeDuplicate = (nums) => {
    var deDup = [...new Set(nums)]
    return deDup
  }

  var removeDuplicateIteration = (nums) => {
    var seen = {}
    var out = []
    var len = nums.length
    var j = 0
    var count = 0
    for(var i=0;i<len;i++){
      var item = nums[i]
      if(seen[item] !== 1) {
        seen[item] = 1
        out[j++] = item
        count++
      }
    }
    return out
  }

  // Check if N and its double exist
  const checkIfExist = (arr) => {
    var len = arr.length
    for (let i=0;i<len;i++){
      var curr = arr[i]
      for(let j=0;j<len;j++){
        var poss = arr[j]
        if (curr === 2 * poss && i !== j) 
          return true
      }
    }
    return false
  }

  // Replace Elements with Greatest Element on the right side

  const replaceElements = (arr) => {
    let len = arr.length
    let max_from_right = arr[len-1]
    arr[len-1] = -1
    
    for (let i=len-2;i>=0;i--) {
      let temp = arr[i]
      arr[i] = max_from_right
      
      if(max_from_right<temp)
        max_from_right = temp
    }
    return arr
  }

  // Move Zeros
  // Move Zeros to the right

  const moveZeroToRight = (nums) => {
    let nonZeroIndex = 0
    let len = nums.length
    for(let i=0;i<len;i++) {
      if(nums[i] != 0) {
        nums[nonZeroIndex] = nums[i]
        nonZeroIndex++
      }
    }
    for(let i=nonZeroIndex;i<len;i++){
      nums[i] = 0
    }
    return nums
  }

  const moveZeroToLeft = (nums) => {
    let nonZeroIndex = nums.length - 1
    let len = nums.length - 1
    for (let i=len;i>=0;i--) {
      if(nums[i] != 0){
        nums[nonZeroIndex] = nums[i]
        nonZeroIndex--
      }
      console.log(nums)
      console.log(nonZeroIndex)

    }
    for (let i=nonZeroIndex;i>0;i--) {
      nums[i] = 0
    }
    return nums
  }

  return (
    <div>
      <br />
      <h4>Max consecutive ones of: {JSON.stringify(array)}</h4>
      <Form>
        <Form.Group>
        <Row>
          <Col xs={2}>
            <Form.Control type="string" maxLength={1} onChange={saveInput} />
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
      <hr />

      <br />
      <h4>Remove Element: {removeElement([3,2,2,3],3)}</h4>
      <h4>Remove Element Filter: {JSON.stringify(removeElementFilter([3,2,2,3],3))}</h4>
      <hr />

      <br />
      <h4>Deduplication: {JSON.stringify([3,2,2,3,3,4,5,6,10,11,2,12,31,11,31,32])}</h4>
      <h4>Deduplication Iteration: {JSON.stringify(removeDuplicateIteration([3,2,2,3,3,4,5,6,10,11,2,12,31,11,31,32]))}</h4>
      <hr />

      <br />
      <h4>Replace Elements with Greatest Element on the right side</h4>
      <h4>{JSON.stringify(replaceElements([17,18,5,4,6,1]))}</h4>
      <hr />

      <br />
      <h4>Move Zero to the Right of [0,1,0,3,12]</h4>
      <h4>Result: {JSON.stringify(moveZeroToRight([0,1,0,3,12]))}</h4>
      <hr />

      <br />
      <h4>Move Zero to the Left of [0,1,0,3,12]</h4>
      <h4>Result: {JSON.stringify(moveZeroToLeft([0,1,0,3,12]))}</h4>
      <hr />
    </div>
  )
}

export default Array