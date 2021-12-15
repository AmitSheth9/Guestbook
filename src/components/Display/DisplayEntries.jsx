import React from 'react'
import { useEntry } from '../../context/EntryContext'


export default function DisplayEntries() {
    const { entry } = useEntry();
    return (
        <div className='outer-container'>
            {entry.map((item => {
                    return (
                        <p className='container' key={item.message}>
                            <div className='row'>{item.user}</div>
                            <div className='row'>{item.message}</div>


                        </p>
                    )
                }))}
                
        </div>
    )
}
