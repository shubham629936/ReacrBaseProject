import React, { useState } from 'react'
import './show.css'
function Show({object,deleteCart}) {
    
  return (
    <div className='mainBox'>
        {
            object.map((el)=>{
                return(
                <div className="diva" key={el.id}>
                   
                
                  <div className="delete"><i class="material-symbols-outlined" onClick={()=>deleteCart((el.id))} >close</i></div>
                  <img src={el.img_link} alt="" className='img'/>
                  <div className="details">
                         <span className='bName'>{el.Brand_name}</span>
                       <div className="price">
                           <span className='price1'><sup>&#8377;</sup>{el.actual_price}</span>
                           <span className='price2'><sup>&#8377;</sup>{el.real_price}</span>      
                        </div>
                        <span className='desc'>{el.desc}</span>
                  </div> 
                </div>
                )})
        }
    </div>
    
    
  )
}

export default Show