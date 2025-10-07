import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer id="contact" className="border-top py-4">
                <div className="container d-flex flex-wrap justify-content-between align-items-center">
                <p className="mb-0 text-muted">© <span id="year"></span> LaboursHub</p>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link text-muted" to="/terms">Privacy</Link></li>
                    <li className="nav-item"><Link className="nav-link text-muted" to="/terms">Terms</Link></li>
                    <li className="nav-item"><Link className="nav-link text-muted" to="/contact">Contact</Link></li>
                </ul>
                </div>
            </footer>
        </div>
  )
}
