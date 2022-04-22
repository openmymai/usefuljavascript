import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const binarysearch = () => {
  const [ insertValue, setInsertValue ] = useState(0)
  var exarr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  // Binary Search
  const binarySearch = (arr, val) => {
    let start = 0, end = arr.length - 1

    while (start <= end) {
      let mid = Math.floor((start + end)/2)
      console.log(mid)
      if (arr[mid] === val) {
        return mid
      }

      if (val < arr[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
    return -1
  }
  // End Binary Search

  return (
    <div>
      <br />
      <hr />
      <Container>
        <h1>Binary Search</h1>
        <h4>Array = {JSON.stringify(exarr)}</h4>
        <h4>Search <input onChange={e => setInsertValue(+e.target.value)} /></h4>
        <h3>Search {insertValue}, Result in location: {binarySearch(exarr, insertValue)}</h3>
      </Container>
      <hr />
    </div>
  )
}

export default binarysearch