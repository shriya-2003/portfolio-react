import React from 'react';
import './skills.css';
import web from '../../assets/web.jpg';
import ml from '../../assets/ml.jpg';
import vol from '../../assets/vol.jpg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do </span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites.I am well verse in React JS, Javascipt, HTML and also backend services through MongoDB and SQL. Apart from web Designing, I also have a keen interest in Machine Learning and NLP where i'm working on image and chat processing for my research.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={web} alt="Front and Back end Developement" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className="heading">Full Stack Development</h2>
                    <p>Developing Fully functional and interactive websites with creative UI features</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ml} alt="Machine Learning and NLP" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className="heading">Machine Learning and NLP Research</h2>
                    <p>Discovering various voice and image processing and detection features with emotion classification has always been my keen interest.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={vol} alt="Social service and NGO volunteering" className="skillBarImg" />
                <div className="skillBarText">
                    <h2 className="heading">Social service and NGO volunteering</h2>
                    <p>Giving back to the society has always been my passion and working with NGOs like sakshi and Operation smile has helped me do the same</p>
                </div>
            </div>
        </div>
        </section>
  );
}

export default Skills;

