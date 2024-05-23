import React from 'react'
import  {plansData} from '../../data/plansData.js'
import tick from '../../assets/tick.png'
import right_arrow from '../../assets/rightArrow.png'
import './Plans.css';
const Plans = () => {
  return (
    <div id='plan-main'>
      <div className="plans-heading">
        <span className='stroke-text'>Ready To Start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>Now Withus</span>
      </div>
      <div className="plans">
        {
             plansData.map((plan)=>(
                <div className="plan">
                {plan.icon}
                <span>{plan.name}</span>
                <span> $ {plan.price}</span>
                <div className="plan-features">
               {
                plan.features.map((feature,i)=>(
                    <div className="feature">
                    <img src={tick} alt="" srcset="" />
                    <span key={i}>{feature} </span>
                    </div>
                ))
               } 
                </div>
                <div className="join">
                <span>See more benifits </span> <img src={right_arrow} alt="" srcset="" />
      <button className='btn'>Join Now</button>
      </div>
                </div>
             ))
        }
     
      </div>
    </div>
  )
}

export default Plans
