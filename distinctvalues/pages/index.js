import React from "react"

const Home = () => {

  var data = {
    order: [{
        invoiceToFullName: "Willy",
        priceGross: 1200,
        reletive: "cash"
      },
      {
        invoiceToFullName: "Willy",
        priceGross: 1200,
        reletive: "cash"
      },
      {
        invoiceToFullName: "John Doe",
        priceGross: 500,
        reletive: "credit"
      },
      {
        invoiceToFullName: "John Doe",
        priceGross: 1600,
        reletive: "cash"
      },
    ]
  }

  var mapoutput = data.order.reduce(function(map, invoice) {
    var name = invoice.invoiceToFullName
    var price = +invoice.priceGross
    map[name] = (map[name] || 0) + price
    return map
  }, {})

  var array = Object.keys(mapoutput).map(function(name) {
    return {
      fullName: name,
      totalPriceGross: mapoutput[name]
    }
  })

  return (
    <div className="container">
      <br />
      Original
      
      {data.order.map((item,index) =>
        <ul style={{listStyle: "none"}} key={index}>
          <li>{item.invoiceToFullName} : {item.priceGross}</li>
        </ul>
      )}
      <br />
      After Distinct
      
      {array.map((item,index) =>
        <ul style={{listStyle: "none"}} key={index}>
          <li>{item.fullName} : {item.totalPriceGross}</li>
        </ul>
      )}
    </div>
  )
}

export default Home