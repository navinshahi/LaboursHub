import React from 'react'
import styles from './css/Contact.module.css'

export default function Contact() {

  function handleSubmit(){
    
  }

  return (
    <div>
      <header className={styles.heroContact}>
        <div className="container">
          <h1 className="display-5">Contact <i><b>"Labours Hub"</b></i></h1>
          <p className="lead">Reach out for support, partnerships, or hiring skilled workers.</p>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className={`card ${styles.contactCard} p-3 h-100`}>
                <div className="card-body">
                  <h5 className="fw-bold mb-4">Get in touch</h5>

                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3 text-primary"><i className="bi bi-envelope-paper-fill fs-4"></i></div>
                    <div>
                      <div className="small text-uppercase text-muted">Email</div>
                      <a className="text-decoration-none" href="mailto:support@labourshub.com">support@labourshub.com</a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3 text-primary"><i className="bi bi-telephone-outbound-fill fs-4"></i></div>
                    <div>
                      <div className="small text-uppercase text-muted">Phone</div>
                      <a className="text-decoration-none" href="tel:+911234567890">+91 6306043265</a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3 text-primary"><i className="bi bi-geo-alt-fill fs-4"></i></div>
                    <div>
                      <div className="small text-uppercase text-muted">Address</div>
                      <div>Bhatpar Rani, Deoria, Uttar pradesh (INDIA)</div>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <h6 className="fw-semibold mb-2">Working hours</h6>
                  <p className="mb-1">Mon–Fri: 9:00am–6:00pm</p>
                  <p className="mb-0">Sat: 10:00am–2:00pm · Sun: Closed</p>

                  <div className="mt-4">
                    <a href="/" className="btn btn-outline-primary btn-sm me-2"><i className="bi bi-whatsapp"></i> WhatsApp</a>
                    <a href="/" className="btn btn-outline-secondary btn-sm"><i className="bi bi-chat-left-text"></i> Live Chat</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className={`card ${styles.contactCard}`}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-1">Send a message</h5>
                  <p className="text-muted mb-4">Fill the form and our team will get back within 24 hours.</p>

                  <form className="row g-3" onSubmit={handleSubmit} >
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label">Full name</label>
                      <input type="text" className="form-control" id="fullName" name="name" placeholder="e.g., Rahul Sharma" required/>
                      <div className="invalid-feedback">Please enter your full name.</div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="email" name="email" placeholder="e.g., rahul@email.com" required/>
                      <div className="invalid-feedback">Please enter a valid email.</div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input type="tel" className="form-control" id="phone" name="phone" placeholder="+91 98xxxxxx" pattern="^[0-9+() -]{7,}$" required/>
                      <div className="invalid-feedback">Please enter a valid phone number.</div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="topic" className="form-label">I’m contacting about</label>
                      <select id="topic" className="form-select" name="topic" required>
                        <option selected disabled>Choose a topic</option>
                        <option>Hire skilled labour</option>
                        <option>Partner with Labours Hub</option>
                        <option>Support / Account</option>
                        <option>Other</option>
                      </select>
                      <div className="invalid-feedback">Please select a topic.</div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea className="form-control" id="message" name="message" rows="5" placeholder="Tell us how we can help..." required></textarea>
                      <div className="invalid-feedback">Please write a message.</div>
                    </div>

                    <div className="col-12 d-flex align-items-center">
                      <div className="form-check me-3">
                        <input className="form-check-input" type="checkbox" value="" id="consent" required/>
                        <label className="form-check-label" htmlFor="consent">
                          I agree to the terms and privacy policy.
                        </label>
                        <div className="invalid-feedback">Consent is required.</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-primary btn-lg w-100" type="submit">
                        <i className="bi bi-send-fill me-1"></i> Send Message
                      </button>
                    </div>
                  </form>

                  <div id="formAlert" className="alert alert-success mt-3 d-none" role="alert">
                    Thanks! Your message has been sent. Our team will respond shortly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
