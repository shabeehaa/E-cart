import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SIngleproduct() {
 const navigate=useNavigate()
 const[Product,setProduct]= useState(JSON.parse(localStorage.getItem("product")) ||[])
 const[Cart,setCart]= useState({})
 const[Item,setItem]=useState(false)
 const[Id,setId]= useState(JSON.parse(localStorage.getItem("id")))
    console.log("single product id===>",Id)
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${Id}`).then(response=>{
            console.log("response===>",response)
            setCart(response.data)
        })
    },[])
 

    const addtocart=(cart)=>{
        console.log("cartr===>",cart)
       
        setProduct([...Product, {...Cart }])
       
        setItem(true)
       
    }
    console.log("additems====>",Product)
    useEffect(()=>{
      if(Item===true){
        localStorage.setItem("product",JSON.stringify(Product))
      navigate(`/cart`)
      }
      
    },[Item])
  return (
<>

<div className='row container offset-sm-1 mt-5 d-flex justify-content-start'style={{border:"1px solid grey",borderRadius:"10px",boxShadow:"5px 10px 5px 10px #888888"}}>
  
<div className='col-md-5 mt-4' > 
<img src={Cart?.image} height="400px" width='400px'></img></div>
<div className='col-md-6'> 
<h4 className='text-uppercase text-black-20'>{Cart?.category}</h4>
<h3 className='display-5'>{Cart?.title}</h3>
<p className='lead'>
  Rating:{Cart?.rating &&Cart?.rating.rate}<i className='fa fa-star'></i>
</p>

<h3 className='display-6 fw-bold my-4'>₹{Cart?.price}</h3>
<p className='lead'>{Cart?.description}</p>
<button type="button" className="btn btn-outline-dark" onClick={()=>{addtocart(Cart)}}>Click to buy</button>
</div>
</div>

</>
  )
}
