import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/Navbar.css'


const Home = () => {
    return (
        <div className="home">
            <Navigation />
            Hello depuis Home
        </div>
    );
};

export default Home;