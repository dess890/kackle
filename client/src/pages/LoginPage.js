import React from 'react'
import Login from '../components/Login'
import LoginButton from '../components/LoginButton'
import SideNav from '../components/SideNav'
import img from '../img/kacklelogo.png'

function LoginPage() {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
                <div className='loginsize' style={{ width: '30%', margin: '0 auto', paddingTop: '5%' }}>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginPage