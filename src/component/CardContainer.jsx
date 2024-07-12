import React from 'react'
import {languages} from "../helpers/data.js"
import Card from './Card.jsx'
export default function CardContainer() {
  return (
    <div className='card-container'>
    {languages.map((item,index)=>(
         <Card {...item} key={index}/>
    ))}
 </div>
  )
}
