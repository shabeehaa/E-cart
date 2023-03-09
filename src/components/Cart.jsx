import React, { useState, useEffect } from 'react'
import './Cart.css'

export default function Cart() {
    const[productlist,setproductlist]=useState(JSON.parse(localStorage.getItem("product")))
    console.log("cartproduct====>",productlist)
    
    const deleteitem=(item)=>{
        console.log("deleteid===>",item)
        const deleteitem=productlist.filter((items)=>{
            return items.id!=item
        })
        setproductlist(deleteitem)
        console.log("deleteitem===>",productlist)
    }
    useEffect(()=>{
      localStorage.setItem("product",JSON.stringify(productlist))
  },[productlist])
  return (
   <>
   <section className="h-100 gradient-custom">
  <div className="container py-5">

    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
      {productlist.map((data,key)=>
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart items</h5>
          </div>
          <div className="card-body">
         
            
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              
                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={data.image}
                    className="w-100"
                    alt="Blue Jeans Jacket"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    />
                  </a>
                </div>
              
              </div>
              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          
                <p>
                  <strong>{data.title}</strong>
                </p>
                <p>Color: blue</p>
                <p>Size: M</p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm me-1 mb-2"
                  data-mdb-toggle="tooltip"
                  title="Remove item"
                >
                  <i className="fas fa-trash" onClick={()=>{deleteitem(data.id)}} />
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm mb-2"
                  data-mdb-toggle="tooltip"
                  title="Move to the wish list"
                >
                  <i className="fas fa-heart" />
                </button>
              
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            
                <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
               
                  <div className="form-outline">
                    <input
                      id="form1"
                      min={0}
                      name="quantity"
                      defaultValue={1}
                      type="number"
                      className="form-control"
                    />
                    <label className="form-label offset-sm-4" htmlFor="form1">
                      Quantity
                    </label>
                  </div>
              
                </div>
               
                <p className="text-start text-md-center">
                  <strong> ₹{data.price}</strong>
                </p>
              
              </div>
            </div>
          
            <hr className="my-4" />
        




       
          </div>
        </div>
     )}   
    </div>
    </div>
    


        
          <div class="btn-block btn-lg" className='lastbtn'>
            <button type="button" className='paybutton offset-sm-5' id="price-btn">Proceed to Pay:
            {productlist.reduce((previousScore, currentScore, 
              index)=>previousScore+currentScore.price,0)}</button>
          </div>
    </div>
    </section>
  

</>
  )
}
