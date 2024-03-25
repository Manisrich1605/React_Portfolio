import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Sidebar.css';
const Sidebar = ({ isOpen, toggle }) => {
    const sidebarAnimation = useSpring({
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    });
    return (
        <animated.div className="sidebar" style={sidebarAnimation}>
            <button onClick={toggle} className="toggle-button">
                ☰
            </button>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </animated.div>
    );
};
export default Sidebar;