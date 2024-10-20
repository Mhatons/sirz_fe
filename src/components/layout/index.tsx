// Layout.js
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './nav';
import Footer from './footer';

interface LayoutProps {
    children: ReactNode; // Explicitly type children as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const hideNavAndFooter = ['/admin', '/login', '/register'].includes(location.pathname); 

    return (
        <div>
            {!hideNavAndFooter && <NavBar />} {/* Show NavBar unless on restricted routes */}
            {children} {/* Render the children components */}
            {!hideNavAndFooter && <Footer />} {/* Show Footer unless on restricted routes */}
        </div>
    );
};

export default Layout;
