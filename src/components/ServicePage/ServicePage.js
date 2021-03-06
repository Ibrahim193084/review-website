import React from 'react';
import Footer from '../Footer/Footer';
import MoreServices from '../MoreServices/MoreServices';
import Navigation from '../Navigation/Navigation';

const ServicePage = () => {
    return (
        <div>
            <Navigation/>
            <MoreServices></MoreServices>
            <Footer></Footer>
        </div>
    );
};

export default ServicePage;