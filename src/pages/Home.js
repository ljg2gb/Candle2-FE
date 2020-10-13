import React from 'react'
import Nav from '../components/nav'
import LeftPanel from '../components/leftPanel'

export default function Home() {
    return(
        <div className="App">
            <Nav/>
            <LeftPanel/>
            <h2>Calendar</h2>
            <h1>+</h1>
        </div>
    )
}
