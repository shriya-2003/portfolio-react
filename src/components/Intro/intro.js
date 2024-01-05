import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpg';
import Typical from 'react-typical';
const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm {' '}
            <span className="introName">Shriya
            
            </span><br />and i'm a </span>
            <p>
            <Typical 
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Web Designer',
                    1000,
                    'ML enthusiast',
                    1000
                ]

                }
            />
            </p>
            <p> -----------------------</p>
            <p className="introPara">
                I'm a Computer Science student at Vellore Institute of Technology, Chennai who loves exploring limitless technology.
                </p>
            <a href="https://drive.google.com/file/d/1m0P9_qsNZCsQ0CyCRBFeHxDEWofNe7zW/view?usp=drive_link" target="_blank" rel="noopener noreferrer"  style={{ color: 'white' }}><button className="btn">Check out my startup!</button></a>
            </div>
            <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
