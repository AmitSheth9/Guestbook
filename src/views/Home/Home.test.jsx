import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from "./Home";
import { useGuest } from "../../context/GuestContext";
import { GuestProvider } from '../../context/GuestContext'
import { EntryProvider } from '../../context/EntryContext'
import { ProvideAuth } from '../../context/AuthContext';
it.skip('should display Home on screen', () => {
    const { container } = render(
         <ProvideAuth>
             <Home/>
         </ProvideAuth>
    );
    expect(container).toMatchSnapshot();

    } );