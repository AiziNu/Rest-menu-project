import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

export default function Card({cart}) {
  return (
   <div className='cart-wrapper'>
    <h2>Your Order</h2>
    <ListGroup>
        {
          cart.map(({ title, img, price })=>{
            return (
              <ListGroupItem>
                <img src={img} height={50} />
                <p>{title}</p>
                <p> ${price}</p>
              </ListGroupItem>
            )
          })
        }
    </ListGroup>
   </div>
  )
}
