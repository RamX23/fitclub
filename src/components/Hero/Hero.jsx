import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_background from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
const Hero = () => {
  return (
    <div className='hero'>
        
      <div className="hero-lefth">
      <Header/>
      <div className="best-ad">
        <div className='orange-box'></div>
        <span>The Best fitness club in the town</span>
      </div>
      <div className="herotext">
        <div>
          <span className='stroke-text'>
            SHAPE </span>YOUR<span></span>
        </div>
        <div>
          <span>IDEAL BODY</span>
        </div>
        <div>

          <span >
            in here we help you to shape and build your ideal body and live up your life to fullest
          </span>
          </div>
        </div>
        <div className="figures">
          <div><span>140+</span>
          <span>Expert Coaches</span>
          </div>
          <div><span>50+</span>
          <span>Fitness Programs</span>
          </div>
          <div><span>978+</span>
          <span>Members Joined</span>
          </div>
       
          <div><span></span>
          <span></span>
          </div>
        </div>
     <div className="hero-btn">
      <button className="btn"> Get Started</button>
        <button className="btn">Learn More</button>
     </div>
      </div>
      <div className="hero-righth">
    <button className='btn'>Join Now</button>
    <div className="heartrate">
   <img src={heart} alt="" srcset="" />
   <span>Heart Rate</span>
   <span>116 rpm</span>
    </div>
    <img src={hero_image} alt="" srcset=""  className='hero-img'/>
    <img src={hero_image_background} alt="" srcset="" className='hero-back-img' />

    <div className="calories">
      <img src={calories} alt="" srcset="" />
      <div>
      <span>Calories Burned</span>
      <span>220kcal</span>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Hero
