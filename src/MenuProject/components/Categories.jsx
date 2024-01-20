import React from 'react'
import { Button } from 'reactstrap'

export default function Categories({filterMenu, allCategories}) {
  return (
    <div>
  {
    allCategories.map((category, index)=>{
      return (
        <Button
    color="warning"
    outline
    type='button' key={index} onClick={()=>filterMenu(category)} style={{textTransform: "capitalize"}}
  >
    {category}
  </Button>
      )
    })
  }
    </div>
    //  <button type='button' key={index} onClick={()=>filterMenu(category)} >{category}</button>
  )
}
