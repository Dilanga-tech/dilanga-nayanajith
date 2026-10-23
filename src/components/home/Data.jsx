import React from 'react';
import CV from "../../assets/CV-DilangaThennakoon.pdf";
import { animate, scrambleText } from 'animejs';

function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">Dilanga Thennakoon</h1>
        <h3 className='home__subtitle'>Front-end Developer</h3>
        <p className='home__descripion'>Hi, I'm Dilanga — a UI/UX Designer & Front-End Developer based in Sri Lanka. I craft clean, responsive interfaces that deliver great user experiences.</p>

        <a download="" href={CV} className="button button--flex animate__bounce animate__animated">Download CV</a>
    </div>
  )
}

animate('.home__subtitle', {
  innerHTML: scrambleText(),
  loop: true,
  loopDelay: 4000,
});

export default Data