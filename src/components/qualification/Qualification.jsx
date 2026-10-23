import React from 'react';
import './qualification.css';

const Qualification = () => {

    const [toggleState, setToggleState] = React.useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className='qualification section' id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification_conteiner container">
                <div className="qualification_tabs">
                    <div
                        className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i> Education
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                    </div>
                </div>

                <div className="qualification_sections">

                    {/* ===== EDUCATION ===== */}
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Level 5 Pearson BTEC HND in Computing</h3>
                                <span className="qualification_subtitle">Esoft Metro Campus</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">ICT Diploma L3</h3>
                                <span className="qualification_subtitle">Esoft Metro Campus</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2025 - 2026
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">ICT (NVQ Level 5)</h3>
                                <span className="qualification_subtitle">Vocational Training Authority</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">ICT Diploma (NVQ Level 4)</h3>
                                <span className="qualification_subtitle">Vocational Training Authority</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2017
                                </div>
                            </div>
                        </div>

                        
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">GCE O/L</h3>
                                <span className="qualification_subtitle">Ibbagamuwa Adarsha Maha Vidyalaya</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> 2014
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                            </div>
                        </div>

                    </div>

                    {/* ===== EXPERIENCE ===== */}
                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Front-end Developer</h3>
                                <span className="qualification_subtitle">Helios-ventures (Pvt) Ltd</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Jul 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Associate UI/UX Engineer</h3>
                                <span className="qualification_subtitle">Vidura Solutions (Pvt) Ltd</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Jan 2022 - Jul 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Trainee Junior Developer</h3>
                                <span className="qualification_subtitle">Tecbeez Solutions (Pvt) Ltd</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calendar-alt"></i> Jul 2021 - Dec 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
