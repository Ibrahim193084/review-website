import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h1 className="text-danger text-center mt-5">404</h1>
            <h1 className="text-danger text-center">Page Not Found</h1>
            <Footer></Footer>

            
        </div>
    );
};

export default NotFound;