import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Index = () => {
  // Given an integer array, move all elements that are 0 to the left
  // while maintaining the order of other elements in the array. 
  // The array has to be modified in-place.
  
  let moveZeroToLeft = (A) => {
    if (A.length < 1) {
      return
    }
    let lengthA = A.length
    let writeIndex = lengthA - 1
    let readIndex = lengthA - 1

    while (readIndex >= 0) {
      if (A[readIndex] != 0) {
        A[writeIndex] = A[readIndex]

        writeIndex--
      }
      readIndex--
      console.log(A)
      console.log(readIndex)
    }
    while (writeIndex >= 0) {
      A[writeIndex] = 0
      writeIndex--
      console.log(A)
    }
  }
  let v = [1,10,20,0,59,63,0,88,0]
  console.log("Original Array: [" + v + "]")

  moveZeroToLeft(v)
  console.log("After Moving Zeros: [" + v + "]")

  // How can you double elements of an array using reduce? 
  // Please note that you cannot create additional variables.
  const arrayOfNumbers = [1, 2, 3, 4]
  let aOfn = arrayOfNumbers.reduce((acc, curr, index, array) => array[index] = array[index] * 2)


  return (
    <div>
      <Container>
        <br />
        Array is: 
        <hr />
        [{v.join(', ')}]
        <hr />
        Double elements
        <br />
        {aOfn}


      </Container>
    </div>
  )
}

export default Index