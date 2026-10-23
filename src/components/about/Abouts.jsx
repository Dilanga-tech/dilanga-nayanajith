import React from 'react';
import "./abouts.css";
import AboutImg from "../../assets/profile-2.png"
import CV from "../../assets/CV-DilangaThennakoon.pdf";
import Info from "./Info";

function Abouts() {
  return (
   <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img"/>
        <div className="about__data">
          <Info />
          <p className="about__description">
            Experienced UI/UX Designer and Front-End Developer with 4 years of expertise in
            creating user-centered designs and responsive front-end interfaces. Known for
            delivering high-quality, modern designs in collaboration with cross-functional
            teams. Dedicated to continuous improvement and ensuring excellent user
            experiences.
          </p>
          <a download="" href={CV} className="button button--flex animate__bounce animate__animated animate__repeat-2 animate__delay-2s">Download CV</a>
        </div>
      </div>
   </section>
  )
}

export default Abouts