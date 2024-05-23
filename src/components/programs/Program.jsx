import React from 'react'
import { programsData } from '../../data/programsData'
import './Program.css'
import right_arrow from '../../assets/rightArrow.png'
function Program() {
  return (
    <div className='programs' id='program'> 
      <div className="program-heading">
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>
      <div className="categories">
       {
        programsData.map((program)=>(
          <div className="category">
          {program.image}
          <span>{program.heading}</span>
          <span>{program.details}</span>
          <div className="join-now"><span>Join Now</span><img src={right_arrow} alt="" srcset="" /></div>
          </div>
        ))
       }
      </div>
    </div>
  )
}

export default Program
