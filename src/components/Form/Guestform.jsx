import React from 'react'
import { useGuest } from '../../context/GuestContext'
import { useEntry } from '../../context/EntryContext'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'


export default function Guestform() {
    const [userx, setUserx] = useState('');
    const [message, setMessage] = useState('');
   // const { guest, setGuest } = useGuest();
    const { entry, setEntry} = useEntry();
    const { user, logout } = useAuth(); 
    const {name} = user;
    


    console.log(user, message);
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user, message, 'submit');
        await setEntry([...entry, { name, 'message': message }] );
        setMessage('');
    }

    const handleLogout = () => {
        logout(() => history.push('/login'));
    }

    return (
        <div>Sign The Guestbook!
            <form onSubmit={handleSubmit}>
                
                <label>Guest Entry
                    <input value={message} onChange={(e) => setMessage(e.target.value)}/>
                </label>
                <button type='submit'>Sign</button>
            </form>
            <div>
                <button onClick={handleLogout} >Sign Out</button>
            </div>
        </div>
    )
}
