 import React from 'react'
 import './nav.css'
 function Nav() {
   return (
     <div className='navBar'>
        <div className='brandName'>
             <span class="material-symbols-outlined">home</span>
             <h3>GadgetsDekho.com</h3>
        </div>
         <div className='brandName'>
               <span class="material-symbols-outlined">logout</span>
               <span class="material-symbols-outlined">more_vert</span>
         </div>
       
     </div>
   )
 }
 
 export default Nav