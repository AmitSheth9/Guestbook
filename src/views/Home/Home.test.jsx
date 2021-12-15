import React from "react";
import { render, screen } from '@testing-library/react'
import Home from "./Home";
import { useGuest } from "../../context/GuestContext";
import { GuestProvider } from '../../context/GuestContext'
import { EntryProvider } from '../../context/EntryContext'
it('should display Home on screen', () => {
    const { container } = render(
            <GuestProvider>
                <EntryProvider>
                    <Home />
                </EntryProvider>
            </GuestProvider>
    );
    expect(container).toMatchSnapshot();

    } )