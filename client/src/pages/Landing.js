import React from 'react'
import socialCircle from '../img/landingpagesocials.png'

function Landing() {

	// Centered and pretty mission statement with login and register links
	// hidden sidebar
	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'column', }}>
				<div className='loginsize' style={{ width: '30%', margin: '0 auto', paddingTop: '5%' }}>
					<img src={socialCircle} alt="group of socials"></img>
					
				</div>
			</div>
		</div>
	)
}

export default Landing