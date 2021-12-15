import React from 'react'
import { useGuest } from '../../context/GuestContext'

export default function Header() {
    const {guest} = useGuest();
    return (
        <div>
         {guest ? <h1>  Welcome {guest} </h1>  : <h3>Welcome Guest</h3>    } 
        </div>
    )
}
