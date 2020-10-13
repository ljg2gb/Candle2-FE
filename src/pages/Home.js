import React from 'react'
import BirthdayList from '../components/birthdayList'

export default function Home() {
    return(
        <div className="App">
            <h3>Candle Two</h3>
            <h2>Announcements</h2>
            <p>No birthdays this month</p>
            <BirthdayList/>
            <h2>Calendar</h2>
            <h1>+</h1>
        </div>
    )
}
