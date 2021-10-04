import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import News from '../News/News';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <News></News>
            <About/>
            <Footer></Footer>
        </div>
    );
};

export default Home;