import React from 'react'

export default function Center() {
  return (
   <div>
<div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../assets/carosal1.jpg" className="d-block w-100" alt="..."  style={{height:"700px"}}/>
    </div>
    <div className="carousel-item">
      <img src="../assets/carosal2.jpg" className="d-block w-100" alt="..." style={{height:"700px"}}/>
    </div>
    <div className="carousel-item">
      <img src="../assets/carosal3.jpg" className="d-block w-100" alt="..." style={{height:"700px"}}/>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-target="#carouselExampleControls"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-target="#carouselExampleControls"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>




   </div>
  )
}
