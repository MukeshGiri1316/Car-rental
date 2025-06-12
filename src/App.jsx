import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Preloader from './assets/components/preloader/Preloader.jsx'
import Layout from './assets/utils/Layout.jsx'
import CarDetails from './assets/pages/cars/CarDetails.jsx'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {
        isLoading ? (
          <Preloader onDone={() => setIsLoading(false)} />
        ) : (
          <>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Layout />} />
                <Route path='/car-details' element={<CarDetails />} />
              </Routes>
            </BrowserRouter>
          </>
        )
      }
    </>
  )
}

export default App
