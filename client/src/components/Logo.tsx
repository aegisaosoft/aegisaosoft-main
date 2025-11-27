import { Link } from 'react-router-dom'
import '../App.css'
import logo from '../assets/logo.png'

export function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="Aegis AO Soft" className="logo-img" />
      <span>Aegis AO Soft</span>
    </Link>
  )
}

