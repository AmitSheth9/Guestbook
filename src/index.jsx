import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GuestProvider } from '../src/context/GuestContext'

render(
    <React.StrictMode>
<GuestProvider>
    <App /> 
</GuestProvider> 
</React.StrictMode>, document.getElementById('root'));
