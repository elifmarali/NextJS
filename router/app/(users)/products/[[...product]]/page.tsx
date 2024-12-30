import React from 'react'

function Product({params}:any) {
  return (
    <div>
      Product : {params.product}
    </div>
  )
}

export default Product
