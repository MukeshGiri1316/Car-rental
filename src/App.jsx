import { useState } from 'react'
import './App.css'
import Header from './assets/components/header/Header'
import Footer from './assets/components/footer/Footer.jsx'
import { Hero, About, BookForm, Service, Cars, Contact } from './assets/pages/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About />
      <BookForm />
      <Service />
      <Cars />
      <Contact />
      <Footer />
    </>
  )
}

export default App
