import React from 'react';
import Footer from '../Footer/Footer';
import MoreServices from '../MoreServices/MoreServices';
import Navigation from '../Navigation/Navigation';

const ServicePage = () => {
    return (
        <div className="bg-secondary">
            <Navigation/>
            <MoreServices></MoreServices>
            <Footer></Footer>
        </div>
    );
};

export default ServicePage;