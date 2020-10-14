import React from 'react'
import Nav from '../components/nav'
import LeftPanel from '../components/leftPanel'
import AddNewButton from '../components/addNewButton'
import Footer from '../components/footer'

export default function Home() {
    return(
        <div>
            <Nav/>
            <div className="App">
                <div className="homepage">
                    <LeftPanel/>
                    <h2>Calendar</h2>
                </div>
                <AddNewButton/>
            </div>
            <Footer/>
        </div>
    )
}
