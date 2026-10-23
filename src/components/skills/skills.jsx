import React from 'react';
import './skills.css';
import {
    SiHtml5, SiCss, SiJavascript, SiJquery, SiBootstrap,
    SiTailwindcss, SiLaravel, SiPhp, SiMysql,
    SiFigma, SiSketch, SiGit, SiGithub, SiWordpress,
} from 'react-icons/si';
import { FaPaintBrush, FaPenNib } from 'react-icons/fa';

const skills = [
    { icon: <SiHtml5 />,            name: 'HTML',              color: '#e34f26' },
    { icon: <SiCss />,              name: 'CSS',               color: '#1572b6' },
    { icon: <SiJavascript />,       name: 'JavaScript',        color: '#f7df1e' },
    { icon: <SiJquery />,           name: 'jQuery',            color: '#0769ad' },
    { icon: <SiBootstrap />,        name: 'Bootstrap',         color: '#7952b3' },
    { icon: <SiTailwindcss />,      name: 'Tailwind CSS',      color: '#38bdf8' },
    { icon: <SiLaravel />,          name: 'Laravel',           color: '#ff2d20' },
    // { icon: <SiPhp />,              name: 'PHP',               color: '#777bb4' },
    { icon: <SiMysql />,            name: 'MySQL',             color: '#4479a1' },
    { icon: <SiFigma />,            name: 'Figma',             color: '#f24e1e' },
    { icon: <SiSketch />,           name: 'Adobe XD',          color: '#ff61f6' },
    { icon: <FaPaintBrush />,       name: 'Photoshop',         color: '#31a8ff' },
    { icon: <FaPenNib />,           name: 'Illustrator',       color: '#ff9a00' },
    { icon: <SiGit />,              name: 'Git',               color: '#f05032' },
    { icon: <SiGithub />,           name: 'GitHub',            color: '#181717' },
    { icon: <SiWordpress />,        name: 'WordPress',         color: '#21759b' },
];

const Skills = () => (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container">
            {skills.map(({ icon, name, color }) => (
                <div className="skills__badge" key={name}>
                    <span className="skills__badge-icon" style={{ color }}>{icon}</span>
                    <span className="skills__badge-name">{name}</span>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
