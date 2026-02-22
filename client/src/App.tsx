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
import { VehicleRentalSetPassword } from './pages/VehicleRentalSetPassword'
import { BrazilianMarketplace } from './pages/BrazilianMarketplace'
import { Mercadinho25 } from './pages/Mercadinho25'
import { MyEZToll } from './pages/MyEZToll'
import { Products } from './pages/Products'
import { AegisRentalDetail } from './pages/AegisRentalDetail'
import { BrazilianMarketplaceDetail } from './pages/BrazilianMarketplaceDetail'
import { MyEZTollDetail } from './pages/MyEZTollDetail'
import AdminGuide from './pages/AdminGuide'

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
          <Route path="/products" element={<Products />} />
          <Route path="/products/aegis-rental" element={<AegisRentalDetail />} />
          <Route path="/products/brazilian-marketplace" element={<BrazilianMarketplaceDetail />} />
          <Route path="/products/myeztoll" element={<MyEZTollDetail />} />
          <Route path="/admin-guide" element={<AdminGuide />} />
          <Route path="/vehicle-rental" element={<VehicleRental />} />
          <Route path="/vehicle-rental/set-password" element={<VehicleRentalSetPassword />} />
          <Route path="/brazilian-marketplace" element={<BrazilianMarketplace />} />
          <Route path="/mercadinho25" element={<Mercadinho25 />} />
          <Route path="/myeztoll" element={<MyEZToll />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
