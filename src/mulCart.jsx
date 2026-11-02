
import React, { useState } from 'react'
import Cart from './cart'
import "./cart.css"
function MulCart() {
    const [images,setImages] = useState([])
    const handleImage = (e)=>{
         let files=Array.from(e.target.files)
          const imgeUrls =files.map((file)=>({
            file:file,
            url:URL.createObjectURL(file)
          }))
         setImages(imgeUrls);
    }
    let deleteImage =(index)=>{
     setImages((prevImage)=>images.filter((image,i)=>i!=index)) 
    console.log(index)
     
 }
  return (
    <div>
        <label htmlFor="hidden-file">Choose file:</label>
        <input type="file" accept='image/*' multiple onChange={handleImage}/>
      
      <div className="image-container">
        {
            images.map((image,index)=>(
                <div className="div" key={index}>
                        <img src={image.url} alt={`preview ${index+1}`} width="150"/>
                        <p>{image.file.name}</p>
                        <p>{index+1}</p>
                        <button width="200" onClick={()=>deleteImage((index))}>Delete</button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default MulCart