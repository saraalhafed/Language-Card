import React, { useState } from 'react'
import "./Card.scss"
import TopCard from './TopCard';
import List from './List';
export default function Card(item) {
  const{img,name,options}=item

  const[front,setFront]=useState(true);

  const handelchange=()=>{
    setFront((prev)=>!prev);
    setTimeout(()=>
      {setFront((prev)=>!prev);
    },2000);
  }
    return (
    <div className='card' onClick={handelchange}>
      {front?(
        <TopCard img={img} name={name} />):
       (<div>
          <List options={options}/>
      </div>)
      
      
      } 
  
    </div>
  )
}
