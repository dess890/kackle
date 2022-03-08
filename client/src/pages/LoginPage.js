import React from 'react'
import Login from '../components/Login'

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