import React from 'react'

export default function TopCard({img,name}) {
  return (
    < div className='front-card'>
    <img src={img}alt={name} />
    <div>{name}</div>
   
   </div>
  )
}
