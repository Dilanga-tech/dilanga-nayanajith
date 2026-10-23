import React, { useRef, useEffect } from 'react'
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import './portfolio.css'
import PortfolioImg1 from "../../assets/port-1.png"
import PortfolioImg2 from "../../assets/port-2.png"
import PortfolioImg3 from "../../assets/port-3.jpg"
import PortfolioImg4 from "../../assets/port-4.png"

function Portfolio() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    NativeFancybox.bind(container, '[data-fancybox="gallery"]', {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"], 
        },
      },
    });

    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Recent Work</span>

      <div className="container portfolio_details_container" ref={containerRef}>
        
        {/* Project 1 */}
        <div className="portfolio_container">
            <div className="article_container">
                <img src={PortfolioImg1} alt="Project1" className="project_img" />
                {/* Clicking this absolute overlay element triggers Fancybox */}
                <a data-fancybox="gallery" href={PortfolioImg1} className="img_overlay">
                    <i className="bx bx-search-alt search_icon"></i>
                </a>
            </div>
            <h2 className="portfolio_subtitle project_title">Rent Car Website</h2>
            <span className="project_subtitle">UI Design</span>
        </div>

        {/* Project 2 */}
        <div className="portfolio_container">
            <div className="article_container">
                <img src={PortfolioImg2} alt="Project2" className="project_img" />
                <a data-fancybox="gallery" href={PortfolioImg2} className="img_overlay">
                    <i className="bx bx-search-alt search_icon"></i>
                </a>
            </div>
            <h2 className="portfolio_subtitle project_title">Plant Sell Website</h2>
            <span className="project_subtitle">UI Design</span>
        </div>

        {/* Project 3 */}
        <div className="portfolio_container">
            <div className="article_container">
                <img src={PortfolioImg3} alt="Project3" className="project_img" />
                <a data-fancybox="gallery" href={PortfolioImg3} className="img_overlay">
                    <i className="bx bx-search-alt search_icon"></i>
                </a>
            </div>
            <h2 className="portfolio_subtitle project_title">Food Delivery App</h2>
            <span className="project_subtitle">UI Design</span>
        </div>

         {/* Project 4 */}
         <div className="portfolio_container">
            <div className="article_container">
                <img src={PortfolioImg4} alt="Project4" className="project_img" />
                <a data-fancybox="gallery" href={PortfolioImg4} className="img_overlay">
                    <i className="bx bx-search-alt search_icon"></i>
                </a>
            </div>
            <h2 className="portfolio_subtitle project_title">Cricket App</h2>
            <span className="project_subtitle">UI Design</span>
        </div>

      </div>
    </section>
  )
}

export default Portfolio;
