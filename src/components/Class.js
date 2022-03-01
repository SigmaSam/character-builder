import React from 'react';
import '../styles/Class.css';



const Class = ({logo,name,description,id,role}) => {
  console.log(logo.String)  
  return (    
      <div className='container' key= {id}>
          <img className='Icon' src={logo} alt='' style={{withd:'5rem', height:'5rem'}}/>
          <h1>{name}</h1>
          <h4>{role}</h4>
          <p>{description}</p>
      </div>
    )
}
export default Class