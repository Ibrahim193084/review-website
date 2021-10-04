import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const AboutPage = () => {
    return (
        <div className="bg-secondary">
            <Navigation></Navigation>
            <About></About>
            <Footer></Footer>
            
        </div>
    );
};

export default AboutPage;