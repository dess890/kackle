import React from 'react'

function Landing() {

    // Centered and pretty mission statement with login and register links
    // hidden sidebar
  return (
    <div>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div className='loginsize' style={{ width: '30%', margin: '0 auto', paddingTop: '5%' }}>
                    Something about welcome to Kackle. Our mission.
                    If you haven't already, sign up here or login here
                    <img src="https://media.giphy.com/media/BXVRf5GyMlElO/giphy.gif" width="50px" alt="floating heart"></img>
                </div>
            </div>
        </div>
  )
}

export default Landing