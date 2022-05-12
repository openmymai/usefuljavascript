import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const binarysearch = () => {
  const [ insertValue, setInsertValue ] = useState(0)
  var exarr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  // Binary Search Iteration -> e.target.value is always a string
  const binarySearch = (arr, val) => {
    let start = 0, end = arr.length - 1

    while (start <= end) {
      let mid = Math.floor((start + end)/2)
      
      if (arr[mid] === val) {
        return mid
      }

      if (val < arr[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    console.log(start)
    return -1
    
  }
  // Binary Search Recursive
  const binarySearchRecursive = (arr, val, start = 0, end = arr.length - 1) => {
    var mid = Math.floor((start + end)/2)
    if (arr[mid] === val) {
      return mid
    }
    if (start >= end) {
      console.log(start)
      return -1
      
    }

    return val < arr[mid]
    ? binarySearchRecursive(arr, val, start, mid - 1)
    : binarySearchRecursive(arr, val, mid + 1, end)
  }

  return (
    <div>
      <br />
      <hr />
      <Container>
        <h1>Binary Search</h1>
        <h4>Array = {JSON.stringify(exarr)}</h4>
        <h4>Search <input onChange={e => setInsertValue(+e.target.value)} /></h4>
        <h3>Search {insertValue}, Result in location: {binarySearch(exarr, insertValue)}</h3>
        <h3>Binary Search Recursive</h3>
        <h3>Search Result in location: {binarySearchRecursive(exarr, insertValue)}</h3>
      </Container>
      <hr />
    </div>
  )
}

export default binarysearch