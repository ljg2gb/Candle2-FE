import React from 'react';
import Announcements from '../components/announcements'
import BirthdayList from '../components/birthdayList'

export default function leftPanel() {
    return(
        <div className='left-panel'>
            <Announcements/>
            <BirthdayList/>
        </div>
    )
}