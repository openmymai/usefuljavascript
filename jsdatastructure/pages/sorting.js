import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const sorting = () => {
  // Bubble Sort
  // Bubble sorting is the simplest sorting algorithm.
  // It simply iterates over the entire array and swaps
  // elements if one is bigger than the other.

  // Swap is a common function used in sorting.
  const swap = (array, index1, index2) => {
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  }

  // Bubble Sorting
  const bubbleSort = (array) => {
    for (var i=0, arrayLength = array.length; i<arrayLength; i++) {
      for (var j=0; j<=i; j++) {
        if (array[i] < array[j]) {
          swap(array, i, j)
        }
      }
    }
    return array
  }

  var bubbleArray = [6,1,2,3,4,5]

  // Selection Sort
  // Selection sort works by scanning the elements for the smallest element
  // and inserting it into the current position of the array.
  const selectionSort = (items) => {
    var len = items.length, min

    for (var i=0; i<len; i++) {
      min = i
      console.log("ink", i)
      for(var j=i+1; j<len; j++) {
        console.log("jam", j)
        if(items[j] < items[min]) {
          min = j
        }
      }
      if (i != min) {
        swap(items, i, min)
      }
    }
    return items
  }
  var selectionArray = [6,1,23,4,2,3]

  // Inserting Sort
  // Insertion sort works similary to selection sort by searching
  // the array sequencially and moving the unsorted items
  // into a sorted sublist on the left side of the array.
  const insertionSort = (items) => {
    var len = items.length, value, i, j
    for (i=0; i<len; i++) {
      value = items[i]
      for(j=i-1; j>-1 && items[j]>value; j--) {
        items[j+1] = items[j]
      }
      items[j+1] = value
    }
    return items
  }
  var insertionArray = [6,1,23,4,2,3]

  // Quicksort
  // Quicksort works by obtaining a pivot and partiioning the array around it
  // (bigger elements on one side and smaller elements on the other side)
  // until everything is sorted.
  const quickSort = (items) => {
    return quickSortHelper(items, 0, items.length-1)
  }

  const quickSortHelper = (items, left, right) => {
    var index
    if (items.length > 1) {
      index = partition(items, left, right)
      
      if (left < index -1 ) {
        quickSortHelper(items, left, index - 1)
      }

      if (index < right) {
        quickSortHelper(items, index, right)
      }
    }
    return items
  }

  const partition = (array, left, right) => {
    var pivot = array[Math.floor((right + left)/2)]
    while (left <= right) {
      while (pivot > array[left]) {
        left++
      }
      while (pivot < array[right]) {
        right--
      }
      if (left <= right) {
        var temp = array[left]
        array[left] = array[right]
        array[right] = temp
        left++
        right--
      }
    }
    return left
  }
  var quicksortArray = [6,1,23,4,2,3]

  return (
    <div>
      <br />
      <Container>
        <h1>Bubble Sort</h1>
        <h4>Original</h4>
        {JSON.stringify(bubbleArray)}
        <h4>Sorted Array</h4>
        {JSON.stringify(bubbleSort(bubbleArray))}
        <hr />

        <h1>Selection Sort</h1>
        <h4>Original</h4>
        {JSON.stringify(selectionArray)}
        <h4>Sorted Array</h4>
        {JSON.stringify(selectionSort(selectionArray))}
        <hr />

        <h1>Insertion Sort</h1>
        <h4>Original</h4>
        {JSON.stringify(insertionArray)}
        <h4>Sorted Array</h4>
        {JSON.stringify(insertionSort(insertionArray))}
        <hr />

        <h1>Quicksort</h1>
        <h4>Original</h4>
        {JSON.stringify(quicksortArray)}
        <h4>Sorted Array</h4>
        {JSON.stringify(quickSort(quicksortArray))}
        <hr />
      </Container>
    </div>
  )

}

export default sorting