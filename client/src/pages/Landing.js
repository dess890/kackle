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

{/* <div>
      <div class="layer">
        <p>Kackle</p>
        <br/>
        <div className='subtitle'>Welcome to the all new social media site</div>
        <img src={foto} />
    </div>
        <Button m='20' colorScheme='orange' variant='outline'>Register Here</Button>

    <p class="content">
    </p>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div className='loginsize' style={{ width: '30%', margin: '0 auto', paddingTop: '5%' }}>
                    Something about welcome to Kackle. Our mission.
                    If you haven't already, sign up here or login here
                    <img src="https://media.giphy.com/media/BXVRf5GyMlElO/giphy.gif" width="50px" alt="floating heart"></img>
                </div>
            </div>
        </div> */}