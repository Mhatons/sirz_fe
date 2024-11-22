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
        <div className=''>
            <div className='content'>
                {!hideNavAndFooter && <NavBar />}
                {children}
                {!hideNavAndFooter && <Footer />}
            </div>
            <video className='background-video' autoPlay loop muted playsInline >
                <source src={"https://cdn.pixabay.com/video/2024/02/23/201735-916310640_large.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
};

export default Layout;