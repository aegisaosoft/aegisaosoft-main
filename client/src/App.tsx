import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './i18n/config'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { VehicleRental } from './pages/VehicleRental'
import { BrazilianMarketplace } from './pages/BrazilianMarketplace'
import { Mercadinho25 } from './pages/Mercadinho25'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicle-rental" element={<VehicleRental />} />
          <Route path="/brazilian-marketplace" element={<BrazilianMarketplace />} />
          <Route path="/mercadinho25" element={<Mercadinho25 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
