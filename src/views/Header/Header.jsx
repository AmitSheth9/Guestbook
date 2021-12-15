import React from 'react'
import { useGuest } from '../../context/GuestContext'

export default function Header() {
    const {guest} = useGuest
    return (
        <div>
            Welcome {guest}            
        </div>
    )
}
