import React from 'react'
import { useGuest } from '../context/GuestContext'
import { useEntry } from '../context/EntryContext'
import { useState } from 'react'



export default function Guestform() {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const { guest, setGuest } = useGuest();
    const { entry, setEntry} = useEntry();

console.log(user, message);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user, message, 'submit');
        setGuest(user);
        setEntry(message);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>Sign the Guestbook
                <label>Guest Name
                    <input value={user} onChange={(e) => setUser(e.target.value)}/>
                </label>
                <label>Guest Entry
                    <input value={message} onChange={(e) => setMessage(e.target.value)}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
