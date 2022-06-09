import React from "react"

const Distinctive = () => {

  var data = {
    order: [{
        invoiceToFullName: " Willy",
        priceGross: 1200.33,
        reletive: "cash"
      },
      {
        invoiceToFullName: "Willy ",
        priceGross: 1500.21,
        reletive: "cash"
      },
      {
        invoiceToFullName: "John Doe",
        priceGross: 500.55,
        reletive: "credit"
      },
      {
        invoiceToFullName: "John Doe",
        priceGross: 1600.11,
        reletive: "cash"
      },
    ]
  }

  var mapoutput = data.order.reduce((map, invoice) => {
    var name = invoice.invoiceToFullName.trim()
    var price = +invoice.priceGross
    // Without || 0, it print NaN (Not a number), double || to precise it.
    map[name] = (map[name] || 0) + price 
    return map
  }, {})

  console.log(mapoutput)

  var array = Object.keys(mapoutput).map((name) => {
    return {
      fullName: name,
      totalPriceGross: mapoutput[name]
    }
  })

  console.log(array)
  return (
    <div>
      <br />
      <h3>Original</h3>
      
      {data.order.map((item,index) =>
        <ul style={{listStyle: "none"}} key={index}>
          <li>{item.invoiceToFullName} : {item.priceGross}</li>
        </ul>
      )}
      <br />
      <h3>After Distinct</h3>
      
      {array.map((item,index) =>
        <ul style={{listStyle: "none"}} key={index}>
          <li>{item.fullName} : {item.totalPriceGross}</li>
        </ul>
      )}
    </div>
  )
}

export default Distinctive