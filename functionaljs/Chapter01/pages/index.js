import React, { useState } from 'react'

const Index = () => {
  // ex 01
  var arraya = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(let i=0; i<arraya.length; i++) {
    arraya[i] = Math.pow(arraya[i], 2);
  }

  // ex 02
  const arrayb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
    function(num) {
      return Math.pow(num, 2)
    }
  )

  // ex 03
  const arrayc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => Math.pow(num, 2))
  
  // ex 04
  var counter = 0
  function increment() {
    return ++counter
  }

  // ex 05
  var increase = (count) => count + 1
  // result NaN

  // ex 06
  var input = [80, 90, 100]
  var sum = (total, current) => total + current
  var total = arr => arr.reduce(sum)
  var size = arr => arr.length
  var divide = (a, b) => a / b
  var average = arr => divide(total(arr), size(arr))

  // ex 07
  var arrsort = [1,2,3,4,5,6,7,8,9]
  var sortDesc = function (arr) {
    return arr.sort(function (a, b){
      return b - a
    })
  }
  
  // ex 08
  let enrollment = [
    {enrolled: 2, grade: 100},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89}
  ]

  var totalGrades = 0
  var totalStudentsFound = 0
  for(let i=0; i<enrollment.length; i++) {
    let student = enrollment[i]
    if(student !== null) {
      if(student.enrolled > 1) {
        totalGrades+= student.grade
        totalStudentsFound++
      }
    }
  }
  var averageex08 = totalGrades / totalStudentsFound

  // ex 09
  let enrollment09 = [
    {enrolled: 2, grade: 100},
    {enrolled: 2, grade: 80},
    {enrolled: 1, grade: 89}
  ]

// const ex09 = _.chain(enrollment09)
//     .filter(student => student.enrolled > 1)
// .pluck('grade')
//    .average()
//     .value()

// ex 10
const [ insertValue, setInsertValue ] = useState(0)
var square = x => x * x

var fahrenheit = c => ((c*9)/5)+32

  return (
    <>
      Array A Ex 01<br />
      {arraya.map(a => a + " ")}
      <br />
      Array B Ex 02<br />
      {arrayb.map(b => b + " ")}
      <br />
      Array C Ex 03<br />
      {arrayc.map(c => c + " ")}
      <br />
      Ex 04 <br />
      {increment()}
      <br />
      Ex 05 <br />
      {increase()}
      <br />
      Ex 06<br />
      {average(input)}
      <br />
      Ex 07<br />
      {sortDesc(arrsort.map(s => s + " "))}
      <br />
      Ex 08<br />
      {averageex08}
      <br />
      Ex 10 
      Input <input type="number" onChange={e => setInsertValue(e.target.value)} /><br />
      Square = {square(insertValue)} X<sup>2</sup><br />
      Fahrenheit = {fahrenheit(insertValue)} °F
      <br />
    </>
  )
}

export default Index