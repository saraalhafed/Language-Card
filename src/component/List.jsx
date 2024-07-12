import React from 'react'

export default function List({options}) {
  return (
    <div>
        <ul className='back-card' >
               {options.map((itm,index)=>
                <li key={index} >{itm}</li>
                            )}
           </ul>
    </div>
  )
}
