import React, { useState } from 'react'
function Cart() {
let [image,setImage] = useState(null);

const handleChange = (event)=>{
 const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
     console.log(file);
}
  return (
    <div>
      <h2>Upload Image</h2>
      <label htmlFor="hidden-file">choose file</label>
      <input type="file" accept='image/*' onChange={handleChange} className='image'/>

      {image && (
        <div>
          <h3>Image Preview</h3>
          <img
            src={image}
            alt="Preview"
            width="200"
            className='image'
          />
        </div>
      )}
    </div>
  )
}

export default Cart