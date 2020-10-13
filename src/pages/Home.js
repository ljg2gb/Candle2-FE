import React from 'react'
import Nav from '../components/nav'
import BirthdayList from '../components/birthdayList'

export default function Home() {
    return(
        <div className="App">
            <Nav/>
            <h2>Announcements</h2>
            <p>No birthdays this month</p>
            <BirthdayList/>
            <h2>Calendar</h2>
            <h1>+</h1>
        </div>
    )
}
