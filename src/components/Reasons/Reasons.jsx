import React from 'react'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import './Reasons.css'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
  return (
    <div className='Reasons' id='reason'>
        <div className="reasons-left">
            <img src={image1} alt="" srcset="" />
            <img src={image2} alt="" srcset="" />
            <img src={image3} alt="" srcset="" />
            <img src={image4} alt="" srcset="" />
        </div>
      <div className="reasons-right">
        <span>Some Reasons</span>
        <div><span className='stroke-text'>
           why </span>
            <span>choose us?</span></div>
            <div className="detailsr">
            <div>
                <img src={tick} alt="" srcset="" />
            <span>Over 140+ expert coaches</span>
            </div>
            <div>
                <img src={tick} alt="" srcset="" />
            <span>train smarter and faster than before</span>
            </div>
            <div>
                <img src={tick} alt="" srcset="" />
            <span>1 free program for new memeber</span>
            </div>
            <div>
                <img src={tick} alt="" srcset="" />
            <span>Reliable partners</span>
            </div>
            </div>
            <span >Our Partners</span>
            <div className="partners">
            <img src={nb} alt="" srcset="" />
            <img src={adidas} alt="" srcset="" />
            <img src={nike} alt="" srcset="" />
            </div>
      </div>
    </div>
  )
}

export default Reasons
