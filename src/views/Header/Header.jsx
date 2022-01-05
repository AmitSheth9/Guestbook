import React from 'react'
import { useGuest } from '../../context/GuestContext'
import { useAuth } from '../../context/AuthContext.jsx';

export default function Header() {
    const { user } = useAuth();
    return (
        <div>
         {user ? <h1>  Welcome {user} </h1>  : <h3>Welcome Guest</h3>    } 
        </div>
    )
}
