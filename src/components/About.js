import React from 'react'
import john from './images/Dan1.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' />
                <div className='col-2'>
                    <h2>About</h2>
                    
                    <p>Hello guys! I'm Dan Roque D. Variacion a Web Developer in the Philippines. Graduated of Bachelor of Science in Computer Science from Aemilianum College Inc. Proficient in the Web programming language of HTML, CSS, PHP, and Javascript. Fast learner and easily acquire social skills. </p>
                    <p>I design and develop experiences that make people's lives simple...</p>
                </div>
            </div>
        </div>
    )
}

export default About