// Layout.js
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './nav';
import Footer from './footer';
import video from '../../assets/201735-916310640_tiny.mp4'

interface LayoutProps {
    children: ReactNode; // Explicitly type children as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    const hideNavAndFooter = ['/admin', '/login', '/register'].includes(location.pathname);

    return (
        <div className=''>
            <div className='content max-sm:overflow-x-hidden'>
                {!hideNavAndFooter && <NavBar />}
                {children}
                {!hideNavAndFooter && <Footer />}
            </div>
            <video className='background-video' autoPlay loop muted playsInline >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
};

export default Layout;