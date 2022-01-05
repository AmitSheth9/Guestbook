import React from 'react'
import { useEntry } from '../../context/EntryContext'


export default function DisplayEntries() {
    const { entry } = useEntry();
    return (
        <div className='outer-container'>
            {entry.map((item => {
                    return (
                        <div className='container' key={item.message}>
                            <p className='row'>{item.user}</p>
                            <p className='row'>{item.message}</p>


                        </div>
                    )
                }))}
                
        </div>
    )
}
