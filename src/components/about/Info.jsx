import React from 'react';

function Info() {
  return (
   <div className="about__info grid">
        <div className="about__box"> 
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">
                4 Years Working
            </span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Complete</h3>
            <span className="about__subtitle">
                15+ Projects
            </span>
        </div>
   </div>
  )
}

export default Info