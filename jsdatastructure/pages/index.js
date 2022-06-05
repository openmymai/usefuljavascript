import React from 'react';

const App = () => {
  var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
  console.log(matrix.length);

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
  const matrixClock = matrix[0].map((col, index) => matrix.map(row => row[index]).reverse());
  console.log(matrix.map((row,index) => row[index]));
  
  // Same way matrix[0].map = for (let i=0;i<matrix.length;i++)
  let mm;
  for (let i=0;i<matrix.length;i++){
    mm = matrix.map(row => row[i]).reverse();
    console.log(mm);
  }

  // original matrix -> [[1,2,3],[4,5,6],[7,8,9]]
  // row => row[index] -> Essentially, this map extracts 
  // a single column from a matrix, converting it into a row.
  // row => row[index] -> [[1,4,7],[2,5,8],[3,6,9]]
  // row[index].reverse() -> [[7,4,1],[8,5,2],[9,6,3]]
  
  // Matrix Anti Clockwise Rotate 90 degree 
  const matrixAntiClock = matrix[0].map((col, index) => matrix.map(row => row[matrix.length - 1 - index]));

  return (
    <div>
      <br />
      <hr />
        <h1>Original Array</h1>
        <br />
        {JSON.stringify(matrix)}
        <br />
        <h1>Spread Matrix</h1>
        {JSON.stringify(spreadMatrix)}
        <br />
        <h1>Rotate Matrix Clockwise 90 degree</h1>
        <br />
        {JSON.stringify(matrixClock)}
        <br />
        <h1>Rotate Matrix Anti Clockwise 90 degree</h1>
        <br />
        {JSON.stringify(matrixAntiClock)}
        <br />
        {JSON.stringify(spreadMatrix.join(" "))}
        <br />
        {spreadStr.join(" ")}
        <br />
      <hr />
    </div>
  );
};

export default App;