/*
 * Copyright (c) 2025-2026 Aegis AO Soft LLC and Alexander Orlov.
 * 34 Middletown Ave, Atlantic Highlands, NJ 07716
 *
 * THIS SOFTWARE IS THE CONFIDENTIAL AND PROPRIETARY INFORMATION OF
 * Aegis AO Soft LLC and Alexander Orlov.
 *
 * This code may be used, reproduced, modified, or distributed ONLY with the
 * prior written permission of Aegis AO Soft LLC / Alexander Orlov.
 *
 * Author: Alexander Orlov
 * Aegis AO Soft LLC
 */


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import './i18n/config'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { MyEZWheels } from './pages/MyEZWheels'
import { MyEZWheelsSetPassword } from './pages/MyEZWheelsSetPassword'
import { BrazilianMarketplace } from './pages/BrazilianMarketplace'
import { Mercadinho25 } from './pages/Mercadinho25'
import { MyEZToll } from './pages/MyEZToll'
import { Products } from './pages/Products'
import { MyEZWheelsDetail } from './pages/MyEZWheelsDetail'
import { BrazilianMarketplaceDetail } from './pages/BrazilianMarketplaceDetail'
import { MyEZTollDetail } from './pages/MyEZTollDetail'
import { AegisLocalizerDetail } from './pages/AegisLocalizerDetail'
import { HueControlDetail } from './pages/HueControlDetail'
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
          <Route path="/products/myezwheels" element={<MyEZWheelsDetail />} />
          <Route path="/products/aegis-rental" element={<Navigate to="/products/myezwheels" replace />} />
          <Route path="/products/brazilian-marketplace" element={<BrazilianMarketplaceDetail />} />
          <Route path="/products/myeztoll" element={<MyEZTollDetail />} />
          <Route path="/products/aegis-localizer" element={<AegisLocalizerDetail />} />
          <Route path="/products/huecontrol" element={<HueControlDetail />} />
          <Route path="/admin-guide" element={<AdminGuide />} />
          <Route path="/myezwheels" element={<MyEZWheels />} />
          <Route path="/myezwheels/set-password" element={<MyEZWheelsSetPassword />} />
          <Route path="/vehicle-rental" element={<Navigate to="/myezwheels" replace />} />
          <Route path="/vehicle-rental/set-password" element={<Navigate to="/myezwheels/set-password" replace />} />
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
