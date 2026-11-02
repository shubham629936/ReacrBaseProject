 import React, { useState } from 'react'
 import './input.css'
 import { v4 as uuidv4 } from 'uuid';
 import Show from './show'
 import { Materials } from './assets/assets';
 function Input() {
    const [object,setObject]=useState(Materials)
    const [Fname,setFname] = useState("")
    const [Lname,setLname] = useState("")
    const [real,setReal] = useState("")
    const [actual,setActual] = useState("")
    const [image,setImage] = useState(null)
    const handleImage = (e) => {
        const file = e.target.files[0];
        if(file){
            setImage(URL.createObjectURL(file));

        }
    };
    // Add new data
    const handleSubmit = ()=>{
        if(!Fname||!Lname||!image||!real||!actual){
            alert("Please enter all details");
            return;
        }
            
    
    let newObject ={
        id:uuidv4(),
        Brand_name:Fname,
        desc:Lname,
        img_link:image,
        actual_price:real,
        real_price:actual,
    };
        setObject((prevObject)=>[...prevObject,newObject]);
        setFname("");
        setLname("");
        setImage(null);
        setReal("");
        setActual("");

        alert("Data Added Successfull")

       }

       let dataFetch1 = (e)=>{
        setFname(e.target.value)
       }
        let dataFetch2 = (e)=>{
        setLname(e.target.value)
        console.log(e.target.value)
       }
       let dataFetch3 = (e)=>{
        setActual(e.target.value)
        console.log(e.target.value)
       }
       let dataFetch4 = (e)=>{
        setReal(e.target.value)
       }

       let deleteCart =(id)=>{
        setObject((prevObject)=>object.filter((prevObject)=>prevObject.id!==id))
       }
          return (
        <div className='inputBox'>
           <div className="cont">
            <div className="input">
                 <label htmlFor="brandname">Brand name:</label>
                 <input type="text" id='brandname' value={Fname} onChange={(e) =>dataFetch1((e))} placeholder='Enter Brand Name' />
            </div>
            <div className="input">
                 <label htmlFor="realprice">Real price:</label>
                 <input type="text" id='realprice' value={real}  placeholder='Enter Real Price' onChange={(e) =>dataFetch4((e))}/>
            </div>
            <div className="input">
                   <label htmlFor="acprice">Actual price:</label>
                 <input type="text" id='acprice' value={actual}  placeholder='Enter Actual Price' onChange={(e) =>dataFetch3((e))} />
            </div>
            <div className="input">
                  
                 <label htmlFor="comment">Add description:</label>
                 <textarea name="comment" maxLength={50} id="comment" value={Lname} onChange={(e) =>dataFetch2((e))} placeholder='write about something'></textarea>
            </div>
            <div className="input">
                 <label htmlFor="file">Add image:</label>
                 <input type="file" id='file' onChange={handleImage} accept='image/*' />
            </div>
                 
                 
                
                 
                 <button onClick={handleSubmit}>Add data</button>
           </div>
            <div className="shadow"></div>
         <Show object={object} deleteCart={deleteCart}/>
     </div>
   )
 }
 
 export default Input