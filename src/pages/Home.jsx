import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Properties from '../components/Properties/Properties'
import About from '../components/About/About'
import Choose from '../components/Choose/Choose'
import Agents from '../components/Agents/Agents'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Properties />
            <About />
            <Choose />
            <Agents />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home