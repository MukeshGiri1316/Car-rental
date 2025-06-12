import React from 'react'
import { Hero, About, BookForm, Service, Cars, Contact } from '../pages/index.js'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'

function Layout() {
    return (
        <>  
            <Header/>
            <Hero />
            <About />
            <BookForm />
            <Service />
            <Cars />
            <Contact />
            <Footer/>
        </>
    )
}

export default Layout
