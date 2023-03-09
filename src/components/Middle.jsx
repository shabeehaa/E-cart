import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Middle.css'

export default function Middle() {
    const navigate=useNavigate()
const [Product,setProduct]=useState()
const[Filteritem,setFilteritem]=useState("")


useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then(response=>{
    console.log("response====>",response)
    setProduct(response.data)
})
},[])

const addtocart=(id)=>{
    console.log("id====>",id)
    localStorage.setItem("id",JSON.stringify(id))
    navigate(`/singleproduct`)

}
const allcateg=(item)=>{
if(item=="All"){
  setFilteritem(Product)
}else{
  const filterdata=Product.filter((data)=>{
    return data.category==item
  })
  setFilteritem(filterdata)
  }
}

  return (
<>

<div className='row '>
<div className='container my-5 py-5'>
          <div className='row'>
            <div className='col-sm-12 mb-5'>
              <h1 className='display-6 fw-bolder tex-center offset-sm-5 text-dark'>Latest Products</h1>
              <hr />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
              <button className='btn btn-outline-dark' id="btn-category" onClick={()=>allcateg("All")}>All</button>

              <button className='btn btn-outline-dark me-2' id="btn-category" onClick={()=>allcateg("men's clothing")}>men's clothing</button>
              <button className='btn btn-outline-dark me-2' id="btn-category" onClick={()=>allcateg("women's clothing")}>women's clothing</button>
              <button className='btn btn-outline-dark me-2' id="btn-category" onClick={()=>allcateg("electronics")}>electronics</button>
              <button className='btn btn-outline-dark me-2' id="btn-category" onClick={()=>allcateg("jewelery")}>jewelery</button>

            </div>
          </div>
        </div>

{Filteritem!=="" ?
<>
{Filteritem?.map((d,key)=>
        <div className='col-md-3 mb-4'>
          <div className='card h-100 text-center p-4'>
        <div className='seriescontainer'>
<div className="card"
>
  <img src={d.image
} className="card-img-top" alt="..."  width="200px" height="150px"/>
  <div className="card-body">
    <h5 className="card-title mb-0"><b>{d.title.slice(0,15)}...</b></h5>
    <p className="card-text lead fw-bold" id="price">
    ₹{d.price}
    </p>
    <a href="#" className="btn btn-outline-dark"  onClick={()=>addtocart(d.id)}>
     Add to cart
    </a>
  </div>
</div>
</div>
</div>
</div>
)}
</>
:

Product?.map((d,key)=>
  <div className='col-md-3 mb-4'>
    <div className='card h-100 text-center p-4'>
  <div className='seriescontainer'>
<div className="card"
>
<img src={d.image
} className="card-img-top" alt="..."  width="200px" height="150px"/>
<div className="card-body">
<h5 className="card-title mb-0"><b>{d.title.slice(0,15)}...</b></h5>
<p className="card-text lead fw-bold" id="price">
₹{d.price}
</p>
<a href="#" className="btn btn-outline-dark"  onClick={()=>addtocart(d.id)}>
Add to cart
</a>
</div>
</div>
</div>
</div>
</div>
)
}

</div>

</>
  )
}
