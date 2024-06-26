import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

const NavContext = createContext();

const NavProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [resOpen, setResOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    
    const toggleRes = () => {
        setResOpen(!resOpen);
    };

    return (
        <NavContext.Provider value={{ isOpen, toggleNav, resOpen, toggleRes }}>
            {children}
        </NavContext.Provider>
    );
};

export { NavContext, NavProvider };

export default NavContext