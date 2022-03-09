import { Button } from '@chatscope/chat-ui-kit-react'
import React from 'react'
import './Landing.css'
import foto from '../img/socials.webp'
import { Link } from 'react-router-dom'
import img from '../img/kackle.png'


function Landing() {

  return (
    <section id="home">
    <div className="landing">
      <div className="home-text">
        <div className="section-text__subtitle">Welcome to</div>
        <div className="section-text__title-big">
          Kackle
        {/* <img src={img} style={{width: '150%', padding: '1.1rem', marginLeft: '1.1rem'}} /> */}
        </div>
        <div className="section-text__body">
        A social media site that combines your favourite parts of other social media sites and puts it all in one place!  If you haven't already, register or login here.
        </div>
        
        <Link to='/Login'>
        <div className="download-btn">
          Register Here
        </div>
        </Link>
      </div>

      {/* <div className="section-image"> */}
        <img src={foto} alt="app preview" style={{ marginLeft: '21rem', marginTop: '-5rem'}}/>
      {/* </div> */}
    </div>
  </section>
    )
  }
  
  export default Landing
  
  
  
  // Centered and pretty mission statement with login and register links
  // hidden sidebar


