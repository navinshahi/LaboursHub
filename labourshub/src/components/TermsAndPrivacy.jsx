import React from 'react'
import styles from './css/TermsAndPrivacy.module.css'

export default function TermsAndPrivacy() {
  return (
    <div>
      <header className={styles.termsHero}>
            <div className="container">
            <div className="row align-items-center g-4">
                <div className="col-lg-8">
                <h1 className="display-6 fw-bold mb-2">Legal Center</h1>
                <p className="lead mb-0">Terms & Conditions and Privacy Policy for Labours Hub</p>
                </div>
                <div className="col-lg-4 text-lg-end">
                <span className="badge bg-primary-subtle text-primary rounded-pill">Updated: Aug 2025</span>
                </div>
            </div>
            </div>
        </header>

        {/* <!-- Content --> */}
        <main className="py-5">
            <div className="container">
            <div className="row g-4">
                {/* <!-- Sidebar TOC --> */}
                <aside className="col-lg-3">
                <div className={`card content-card ${styles.contentCard}`}>
                    <div className={`card-body toc-sticky ${styles.tocSticky}`}>
                    <h6 className="fw-bold text-uppercase text-muted mb-3">On this page</h6>
                    <div className="list-group list-group-flush">
                        <a href="#terms" className="list-group-item list-group-item-action py-2"><i className="bi bi-file-earmark-text me-2"></i> Terms & Conditions</a>
                        <a href="#privacy" className="list-group-item list-group-item-action py-2"><i className="bi bi-shield-lock me-2"></i> Privacy Policy</a>
                        <a href="#cookies" className="list-group-item list-group-item-action py-2"><i className="bi bi-cookie me-2"></i> Cookie Policy</a>
                        <a href="#contact" className="list-group-item list-group-item-action py-2"><i className="bi bi-envelope me-2"></i> Contact & Complaints</a>
                    </div>
                    <hr/>
                    <p className={`muted-small mb-1 ${styles.mutedSmall}`}><i className="bi bi-geo-alt me-1"></i> Bhatpar Rani, Deoria, Uttar pradesh (INDIA)</p>
                    <p className={`muted-small mb-1 ${styles.mutedSmall}`}><i className="bi bi-envelope me-1"></i> support@labourshub.com</p>
                    <p className={`muted-small ${styles.mutedSmall}`}><i className="bi bi-telephone me-1"></i> +91 6306043265</p>
                    </div>
                </div>
                </aside>

                {/* <!-- Main --> */}
                <section className="col-lg-9">
                <div className={`card content-card ${styles.contentCard}`}>
                    <div className="card-body p-4 p-md-5">

                    {/* <!-- TERMS --> */}
                    <h2 id="terms" className={`section-heading fw-bold mb-3 ${styles.sectionHeading}`}>Terms & Conditions</h2>
                    <p className="text-muted">These Terms & Conditions govern the use of the Labours Hub platform, services, and related websites and applications.</p>

                    <div className="accordion mb-4" id="termsAcc">
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t1h">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#t1">
                            1. Definitions
                            </button>
                        </h2>
                        <div id="t1" className="accordion-collapse collapse show" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            - “Platform” means the Labours Hub website, mobile site, and related services.<br/>
                            - “Client” means any person or entity seeking to hire labour/services via the Platform.<br/>
                            - “Worker” means any skilled or unskilled individual offering labour/services via the Platform.<br/>
                            - “User” means any person who accesses or uses the Platform, including Clients and Workers.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t2h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t2">
                            2. Acceptance of Terms
                            </button>
                        </h2>
                        <div id="t2" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            By accessing or using the Platform, the User agrees to these Terms. If acting on behalf of an organization, the User represents having authority to bind that organization. If the User disagrees, the Platform must not be used.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t3h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t3">
                            3. Eligibility and Account
                            </button>
                        </h2>
                        <div id="t3" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Users must be at least 18 years old (or the age of majority in their jurisdiction). Account information must be accurate and kept up-to-date. Users are responsible for maintaining the confidentiality of login credentials and for all activities under their account.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t4h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t4">
                            4. Services and Marketplace
                            </button>
                        </h2>
                        <div id="t4" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Labours Hub connects Clients and Workers. Unless expressly stated, Labours Hub is not a party to any contract between Users. Job scope, deliverables, schedule, quality, and safety remain the responsibility of the contracting parties.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t5h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t5">
                            5. Payments, Fees, and Taxes
                            </button>
                        </h2>
                        <div id="t5" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Fees and charges will be disclosed prior to engagement. Users authorize Labours Hub or its payment partners to process payments. Users are responsible for applicable taxes. Refunds, if any, are governed by the Refund Policy available on the Platform.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t6h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t6">
                            6. User Conduct and Acceptable Use
                            </button>
                        </h2>
                        <div id="t6" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Users agree not to violate laws, infringe rights, post misleading or harmful content, harass others, or attempt unauthorized access. Labours Hub may suspend or terminate accounts for violations or risks to the Platform or other Users.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t7h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t7">
                            7. Verification and Ratings
                            </button>
                        </h2>
                        <div id="t7" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Labours Hub may conduct document checks, skill verification, and enable ratings/reviews. However, verification does not guarantee performance. Users should conduct their own due diligence and comply with safety regulations.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t8h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t8">
                            8. Intellectual Property
                            </button>
                        </h2>
                        <div id="t8" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            All Platform content, trademarks, and logos are owned by or licensed to Labours Hub and protected by applicable laws. Users retain rights to content they submit but grant Labours Hub a limited license to use it for operating and promoting the Platform.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t9h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t9">
                            9. Disclaimers and Limitation of Liability
                            </button>
                        </h2>
                        <div id="t9" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            The Platform is provided “as is” and “as available.” To the maximum extent permitted by law, Labours Hub disclaims warranties and is not liable for indirect, incidental, or consequential damages. Certain jurisdictions do not allow limitations; some rights may vary.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t10h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t10">
                            10. Indemnity
                            </button>
                        </h2>
                        <div id="t10" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Users agree to indemnify and hold harmless Labours Hub, its affiliates, and personnel from claims arising out of use of the Platform, breach of these Terms, or violation of laws or third‑party rights.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t11h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t11">
                            11. Termination
                            </button>
                        </h2>
                        <div id="t11" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Labours Hub may suspend or terminate access at any time for any reason, including suspected violations. Users may stop using the Platform at any time; provisions intended to survive termination will remain in effect.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t12h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t12">
                            12. Governing Law and Disputes
                            </button>
                        </h2>
                        <div id="t12" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            These Terms are governed by the laws of India, without regard to conflict of law principles. Disputes shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh, unless otherwise required by applicable law.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="t13h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#t13">
                            13. Changes to Terms
                            </button>
                        </h2>
                        <div id="t13" className="accordion-collapse collapse" data-bs-parent="#termsAcc">
                            <div className="accordion-body">
                            Labours Hub may update these Terms from time to time. Material changes will be notified via the Platform or email. Continued use after changes constitutes acceptance of the updated Terms.
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* <!-- PRIVACY --> */}
                    <h2 id="privacy" className={`section-heading fw-bold mb-3 ${styles.sectionHeading}`}>Privacy Policy</h2>
                    <p className="text-muted">This Privacy Policy explains how Labours Hub collects, uses, discloses, and safeguards personal information.</p>

                    <div className="accordion mb-4" id="privacyAcc">
                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p1h">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#p1">
                            1. Information We Collect
                            </button>
                        </h2>
                        <div id="p1" className="accordion-collapse collapse show" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            - Account data: name, email, phone, password.<br/>
                            - Profile data: skills, experience, certificates, location, availability, photos.<br/>
                            - Transaction data: bookings, payments, invoices, communications.<br/>
                            - Usage and device data: IP address, browser, device identifiers, cookies, log data.<br/>
                            - Optional data: referrals, feedback, ratings, and support messages.
                            </div>
                        </div>
                    </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p2h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p2">
                            2. How We Use Information
                            </button>
                        </h2>
                        <div id="p2" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            - Provide and improve the Platform and services.<br/>
                            - Match Clients with suitable Workers and manage bookings.<br/>
                            - Process payments, prevent fraud, and ensure platform security.<br/>
                            - Communicate updates, support responses, and marketing (with consent).<br/>
                            - Comply with legal obligations and enforce policies.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p3h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p3">
                            3. Legal Bases for Processing (EU/EEA/UK)
                            </button>
                        </h2>
                        <div id="p3" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            Where applicable, processing relies on consent, contract necessity, legitimate interests (e.g., platform safety), legal obligations, or vital interests in emergencies.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p4h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p4">
                            4. Sharing and Disclosure
                            </button>
                        </h2>
                        <div id="p4" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            We may share information with: service providers (hosting, payments, KYC), business partners, other Users as required for bookings, authorities when legally required, or during business transfers (e.g., merger or acquisition).
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p5h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p5">
                            5. Data Retention
                            </button>
                        </h2>
                        <div id="p5" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            We retain personal information for as long as necessary to fulfill the purposes described and to meet legal, accounting, or reporting requirements. Retention periods may vary by data type and jurisdiction.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p6h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p6">
                            6. Your Rights
                            </button>
                        </h2>
                        <div id="p6" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            Subject to law, Users may have rights to access, correct, delete, or port data; object or restrict processing; and withdraw consent at any time. Requests can be sent to privacy@labourshub.com. We may require verification of identity.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p7h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p7">
                            7. Security
                            </button>
                        </h2>
                        <div id="p7" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            We implement technical and organizational measures including encryption in transit, access controls, and regular reviews. No method of transmission or storage is 100% secure; Users should also protect their credentials.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p8h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p8">
                            8. International Transfers
                            </button>
                        </h2>
                        <div id="p8" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            Data may be processed and stored in countries outside the User’s location. Where required, we use appropriate safeguards (e.g., Standard Contractual Clauses) to protect personal information during cross-border transfers.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p9h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p9">
                            9. Children’s Privacy
                            </button>
                        </h2>
                        <div id="p9" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            The Platform is not intended for children under 18. We do not knowingly collect data from children. If we learn of such collection, we will delete it promptly and may terminate related accounts.
                            </div>
                        </div>
                        </div>

                        <div className="accordion-item">
                        <h2 className="accordion-header" id="p10h">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#p10">
                            10. Changes to this Policy
                            </button>
                        </h2>
                        <div id="p10" className="accordion-collapse collapse" data-bs-parent="#privacyAcc">
                            <div className="accordion-body">
                            We may update this Privacy Policy periodically. Material updates will be communicated via the Platform or email. Continued use after updates indicates acceptance of the revised Policy.
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                </div>
            </div>
        </main>
    </div>
  )
}
