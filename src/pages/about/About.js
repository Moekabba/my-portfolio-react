import React from 'react'
// import selie from './imgs/profile.jpg';
import "./About.css"

function About() {
  return (
    <div className='main-about'> 
    {/* this stay to the left */}
    <h1 className='myname'> MAHAMADOU KABBA</h1>
    <img
            className="profile-image"
            src="imgs/profolio.jpeg"
            alt=""
          />

    <div className='about-text'>
    
      <h1 className='frontend'>
        Frontend, Backend Developer and UX
      </h1>
      <br></br>
      
      {/* <div className='about-p'> */}
      <p className='about-p1'>
        Hello, I'm Mahamdou.  Nice to meet you.
      </p>
      <p className='about-p'> I am a Web / Software Designer based in Bronx, NY.</p>
      <p className='about-p'> Currently I'm working at Cognizant as a contractor.</p>
      <p className='about-p'>  Open to new opportunities.</p>
      
      
      {/* </div> */}

    
    </div>
    </div>
  )
}

export default About