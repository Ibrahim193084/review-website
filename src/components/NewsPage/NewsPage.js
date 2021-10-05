import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import News from '../News/News';

const NewsPage = () => {
    return (
        <div>
            <Navigation/>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default NewsPage;