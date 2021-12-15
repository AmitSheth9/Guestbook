import React from 'react'
import { useGuest } from '../../context/GuestContext'
import { useEntry } from '../../context/EntryContext'
import { useState } from 'react'



export default function Guestform() {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const { guest, setGuest } = useGuest();
    const { entry, setEntry} = useEntry();

console.log(user, message);
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user, message, 'submit');
        setGuest(user);
        console.log('guest', guest);
        await setEntry((prev) => [...prev, { 'user': user, 'message': message }] );

    }

    return (
        <div>Sign The Guestbook!
            <form onSubmit={handleSubmit}>
                {guest ? (<div>You are Signed In!</div> ) : (<div><label>Guest Name
                    <input value={user} onChange={(e) => setUser(e.target.value)}/>
                </label><br/> </div>)} 
                <label>Guest Entry
                    <input value={message} onChange={(e) => setMessage(e.target.value)}/>
                </label>
                <button type='submit'>Sign</button>
                {guest ? <button onClick={() => {
                    setGuest('')
                    setUser('')}}
                    >Sign Out</button> : <div></div>}
            </form>
            <div>
                
            </div>
        </div>
    )
}
