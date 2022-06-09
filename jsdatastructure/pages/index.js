import React from 'react';

const App = () => {
  var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];

  // Original Matrix
  //  [1,2,3]
  //  [4,5,6]
  //  [7,8,9]
  // Rotate Clockwise Result
  //  [7,4,1]
  //  [8,5,2]
  //  [9,6,3]
  // Rotate Anti Clockwise Result
  //  [3,6,9]
  //  [2,5,8]
  //  [1,4,7]

  var str = "hello";
  const spreadStr = [...str];

  // Spread Operator
  const spreadMatrix = [...matrix];
  // Matrix Clockwise Rotate 90 degree 
  
  // Start from matrix[0].map like making for (i=0;i<len;i++)
  const matrixClock = matrix[0].map((col, i) => matrix.map(row => row[i]).reverse());
  
  // Same way matrix[0].map = for (let i=0;i<matrix.length;i++)
  let mm;
  for (let i=0;i<matrix.length;i++){
    mm = matrix.map(row => row[i]).reverse();
  }

  // original matrix -> [[1,2,3],[4,5,6],[7,8,9]]
  // row => row[i] -> Essentially, this map extracts 
  // a single column from a matrix, converting it into a row.
  // row => row[i] -> [[1,4,7],[2,5,8],[3,6,9]]
  // row[i].reverse() -> [[7,4,1],[8,5,2],[9,6,3]]
  
  // Matrix Anti Clockwise Rotate 90 degree 
  const matrixAntiClock = matrix[0].map((col, i) => matrix.map(row => row[matrix.length - 1 - i]));

  let aa = 0.1
  let bb = 0.2
  console.log(aa+bb)
  return (
    <div>
      <br />
      <hr />
        <h3>Original Array</h3>
        <br />
        {matrix.map((x,i) => {
          return (
            <h6 key={i}>{(i == 0) ? '[' : ''}{'['}{x.join(',')}{']'}{i == '0' || i == '1' ? ',' : ''}{(i == 2) ? ']' : ''}</h6>
          )
        })}
        <br />
        <h3>Spread Matrix</h3>
        {spreadMatrix.map((x,i) => {
          return (
            <h6 key={i}>{i == '0' ? '[' : ''}[{x.join(',')}]{i == '0' || i == '1' ? ',' : ''}{i == '2' ? ']' : ''}</h6>
          )
        })}
        <br />
        <h3>Rotate Matrix Clockwise 90 degree</h3>
        {matrixClock.map((x,i) => {
          return (
            <h6 key={i}>{i == '0' ? '[' : ''}[{x.join(',')}]{i == '0' || i == '1' ? ',' : ''}{i == '2' ? ']' : ''}</h6>
          )
        })}
        <br />
        <h3>Rotate Matrix Anti Clockwise 90 degree</h3>
        {matrixAntiClock.map((x,i) => {
          return (
            <h6 key={i}>{i == '0' ? '[' : ''}[{x.join(',')}]{i == '0' || i == '1' ? ',' : ''}{i == '2' ? ']' : ''}</h6>
          )
        })}

        <br />
        {spreadStr.join(" ")}
        <br />
      <hr />
    </div>
  );
};

export default App;