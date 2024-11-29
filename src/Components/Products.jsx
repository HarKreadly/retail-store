import React from 'react'

export default function Products({product, key}) {
  return (
    <div className="grid bg-slate-50 grid-cols-7 text-center rounded my-1 items-center">
      <div>{product.id}</div>
      <div><img src={product.image} width="80px"/></div>
      <div>{product.title}</div>
      <div>{product.description.slice(0,100)}...</div>
      <div>{product.price}$</div>
      <div>{product.category}</div>
      <div>{product.rating.rate} /5</div>
    </div>
  )
}
