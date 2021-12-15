import React from 'react'
import { EntryProvider } from '../../context/EntryContext'
import Header from '../Header/Header'
import Guestform from '../../components/Form/Guestform'
import DisplayEntries from '../../components/Display/DisplayEntries'
export default function Home() {
    return (
        <div>
    <EntryProvider>
        <Header/> 
        <Guestform/>
        <DisplayEntries/>
    </EntryProvider>
        </div>
    )
}
