import React, { useState } from 'react'
import { testimonialsData } from '../../data/testimonialsData' 
import right_arrow from '../../assets/rightArrow.png'
import left_arrow from '../../assets/leftArrow.png'
import './Testimonial.css'
const Testimonial = () => {
    const [user,Setuser]=useState(0);
    const handleclick=()=>{
        user==0?
      Setuser(user+1):Setuser(user-1)
      ;
    }
  return (
    <div id='testimonial'>
      <div className="t-left">
        <span>Testimonial</span>
        <span className='stroke-text'>What they</span>
        <span>Say about us</span>
        <span>{testimonialsData[user].review}</span>
            <div className="ids">
        <div className="coach">
        <span>{testimonialsData[user].name}</span>
            <span> - {testimonialsData[user].status}</span>
            </div>
        </div>
      </div>
      <div className="t-right">

        <div className="hollow"></div>
       <div className="filled"></div>
        <img src= {testimonialsData[user].image} alt="" srcset="" />
       <div className="arrows">
<img src={right_arrow} alt="" srcset=""  onClick={handleclick}/>
</div>
 
      </div>
    </div>
  )
}

export default Testimonial
