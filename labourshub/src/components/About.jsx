import React from 'react'
import img1 from './Pictures/photo-1521790797524-b2497295b8a0.avif'
import styles from "./css/About.module.css"
import myImg from './Pictures/Navin_Shahi.webp'
import nishaImg from './Pictures/Nisha_Shahi1.webp'

export default function About() {

  return (
    <div>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="display-5">About <i><b>&quot;Labours Hub"</b></i></h1>
          <p className="lead">Connecting skilled workers with opportunities that matter.</p>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={img1} 
                  alt="Workers" className="img-fluid rounded shadow"/>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">Who We Are</h2>
              <p>
                Labours Hub is a platform dedicated to bridging the gap between skilled labourers and those in search 
                of reliable manpower. Whether it’s construction, home services, or specialized trade skills, 
                we make it easier for workers to showcase their abilities and connect with employers or clients 
                who need them.
              </p>
              <p>
                Our mission is to create equal opportunities, fair wages, and a better future for all hardworking 
                individuals while providing a trusted hub for clients seeking quality labour solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="row g-4">
            <div className="col-md-4">
              <div className={styles.iconCircle}><i className="bi bi-bullseye"></i></div>
              <h5 className="fw-bold">Our Mission</h5>
              <p>To empower labourers by giving them visibility, security, and respect while delivering 
              dependable services to communities.</p>
            </div>
            <div className="col-md-4">
              <div className={styles.iconCircle}><i className="bi bi-eye"></i></div>
              <h5 className="fw-bold">Our Vision</h5>
              <p>To be the most trusted platform for skilled work, where effort meets opportunity seamlessly.</p>
            </div>
            <div className="col-md-4">
              <div className={styles.iconCircle}><i className="bi bi-heart"></i></div>
              <h5 className="fw-bold">Our Values</h5>
              <p>Integrity, fairness, and commitment — the foundation of every connection we help build.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Meet Our Team</h2>
          <div className="row g-2">
            <div className="col-md-6 text-center">
              <img src={myImg} width="120" height="120" className="rounded-circle mb-3 shadow" alt="Team Member"/>
              <h6 className="fw-bold">Navin Kumar Shahi</h6>
              <p className="text-muted">Founder & CEO</p>
            </div>
            <div className="col-md-6 text-center">
              <img src={nishaImg} width="120" height="120" className="rounded-circle mb-3 shadow" alt="Team Member"/>
              <h6 className="fw-bold">Dr. Nisha Shahi</h6>
              <p className="text-muted">Business Strategist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
