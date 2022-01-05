import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { useState } from 'react';


export default function Login() {
    const history = useHistory();
    const location = useLocation();
    
    return (
        <div>
            <fieldset>
                <legend>Log in</legend>
                <form>
                    <label>
                        <input />
                    </label>
                    <label>
                        <input />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </fieldset>
        </div>
    )
}
