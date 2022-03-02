import React from 'react'
import ScrollDiv from '../components/ScrollDiv'
import StaticDiv from '../components/StaticDiv'

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <ScrollDiv />
                    <StaticDiv />
                </div>
                <div className="row2">
                    <ScrollDiv />
                    <StaticDiv />
                </div>
            </div>
        </div>
    )
}

export default Home