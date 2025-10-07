import React, { useState } from 'react'
import styles from './css/LoginPage.module.css'
import {stateToCities,states} from './data/StateCityData.js'
import {useNavigate} from "react-router-dom";
import { useAuth } from "./security/AuthContext";
import { registerLabour, registerUser } from './api/LaboursHubApiService.js';


export default function LoginPage() {

    const [expand,setExpand] = useState('d-none')
    const [cities,setCities] = useState([])
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showRegisterSuccessMessage,setShowRegisterSuccessMessage] = useState(false);
    const [showRegisterErrorMessage,setShowRegisterErrorMessage] = useState(false);

    const authContext = useAuth();

    const navigate = useNavigate();

    const handleExpand = (event) => {
        if(event.target.value==='ROLE_LABOUR'){
            setExpand('d-flex')
        }
        else{
            setExpand('d-none')
        }
    }

    const handleCity = (event) => {
        setCities(stateToCities[event.target.value])
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const username = fd.get('email');
        const password = fd.get('password');
        const role = fd.get('role');
        if(role==="ROLE_USER" || role==="ROLE_ADMIN"){
            if (await authContext.login(username,password,role)) {
            navigate("/user");
            } else {
            setShowErrorMessage(true);
            }
        }
        else if(role==="ROLE_LABOUR"){
            if (await authContext.login(username,password,role)) {
            navigate("/labour");
            } else {
            setShowErrorMessage(true);
            }
        }
    }

    async function processData(e){
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const role = fd.get('role');
        if(role==="ROLE_USER" || role==="ROLE_ADMIN"){
            const data = {
                user_name: fd.get('username'),
                user_email: fd.get('email'),
                user_password: fd.get('password'),
                contact: fd.get('contact'),
                bookmark_labour: "",
                address: fd.get('address'),
                pin_code: fd.get('pincode'),
                state: fd.get('state'),
                city: fd.get('city'),
                pic_name: "DefaultImage.jpg"
            }
            try{
                await registerUser(data);
                setShowRegisterSuccessMessage(true);
                setShowRegisterErrorMessage(false);
            }
            catch(e){
                setShowRegisterErrorMessage(true);
                setShowRegisterSuccessMessage(false);
            }
        }
        else if(role==="ROLE_LABOUR"){
            const data = {
                labour_name: fd.get('username'),
                labour_email: fd.get('email'),
                labour_password: fd.get('password'),
                contact: fd.get('contact'),
                sector: fd.get('sector'),
                hourly_cost: fd.get('working_hours'),
                preferred_shift: fd.get('shift'),
                availability: fd.get('availability'),
                experience: fd.get('experience'),
                address: fd.get('address'),
                city: fd.get('city'),
                state: fd.get('state'),
                pin_code: fd.get('pincode'),
                rating: 0,
                summary: fd.get('summary'),
                pic_name: "DefaultImage.jpg"
            }
            try{
                await registerLabour(data);
                setShowRegisterSuccessMessage(true);
                setShowRegisterErrorMessage(false);
            }
            catch(e){
                setShowRegisterErrorMessage(true);
                setShowRegisterSuccessMessage(false);
            }
        }
    }


    return (
        <div className={styles.loginBody}>
        <div className={styles.authCard}>

                <div className={styles.authBody}>
                <ul className={`nav nav-pills mb-3 justify-content-center ${styles.navPills}`} id="authTabs" role="tablist">
                    <li className="nav-item me-2" role="presentation">
                    <button className={`nav-link active ${styles.navLink}`} id="login-tab" data-bs-toggle="pill" data-bs-target="#login" type="button" role="tab">
                        Login
                    </button>
                    </li>
                    <li className="nav-item" role="presentation">
                    <button className={`nav-link ${styles.navLink}`} id="register-tab" data-bs-toggle="pill" data-bs-target="#register" type="button" role="tab">
                        Register
                    </button>
                    </li>
                </ul>

                <div className="tab-content" id="authTabsContent">
                    <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                        {showErrorMessage && <div className="errorMessage" style={{color:"red"}}>
                            Authentication Failed. Please check your credentials.
                        </div>}
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="mb-3">
                        <label htmlFor="login_email" className="form-label">Email</label>
                        <input type="email" className={`form-control ${styles.formControl}`} id="login_email" name="email" placeholder="name@example.com" required />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="login_password" className="form-label">Password</label>
                        <input type="password" className={`form-control ${styles.formControl}`} id="login_password" name="password" placeholder="••••••••" minLength="6" required />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="login_role" className="form-label">Login as</label>
                        <select className={`form-select ${styles.formSelect}`} defaultValue="ROLE_USER" id="login_role" name="role" required>
                            <option value="ROLE_USER">User</option>
                            <option value="ROLE_LABOUR">Labour Professional</option>
                            <option value="ROLE_ADMIN">Admin</option>
                        </select>
                        </div>

                        <div className="d-grid">
                        <button type="submit" className={`btn ${styles.btnBrand}`}>Continue</button>
                        </div>
                    </form>
                    </div>

                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                        <form id="registerForm" className="row" onSubmit={processData}>
                            <div className="mb-3 col-md-6">
                            <label htmlFor="reg_name" className="form-label">Full name</label>
                            <input type="text" className={`form-control ${styles.formControl}`} id="reg_name" name="username" placeholder="John Doe" required />
                            </div>
                            <div className="mb-3 col-md-6">
                            <label htmlFor="contact" className="form-label">Contact Number</label>
                            <input type="text" className={`form-control ${styles.formControl}`} id="contact" name="contact" placeholder="63xxxxxxxx" required />
                            </div>
                            <div className="mb-3 col-md-6">
                            <label htmlFor="reg_email" className="form-label">Email</label>
                            <input type="email" className={`form-control ${styles.formControl}`} id="reg_email" name="email" placeholder="name@example.com" required />
                            </div>

                            <div className="mb-3 col-md-6">
                            <label htmlFor="reg_password" className="form-label">Password</label>
                            <input type="password" className={`form-control ${styles.formControl}`} id="reg_password" name="password" placeholder="Create a password" minLength="6" required />
                            </div>
                            <div className="mb-3 col-12">
                                <label className="form-label">Address</label>
                                <textarea className="form-control" name="address" rows={2} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="state" className="form-label">State</label>
                                <select id="state" name="state" className="form-select" defaultValue="default" onChange={handleCity} required>
                                <option value="default" disabled>Select a state/UT</option>
                                {states.map((item) => (
                                    <option key={item}>{item}</option>
                                ))}
                                </select>
                                <div className="form-text">Choose your state or UT.</div>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label htmlFor="city" className="form-label">City</label>
                                <select id="city" name="city" defaultValue="default" className="form-select" required>
                                <option value="default" disabled>Select a City</option>
                                {cities.map((item) => (
                                    <option key={item}>{item}</option>
                                ))}
                                </select>
                            </div>
                            <div className="mb-3 col-md-6">
                                <label className="form-label">Pin Code</label>
                                <input type="number" className="form-control" name="pincode" required />
                            </div>                        

                            <div className="mb-3">
                            <label htmlFor="reg_role" className="form-label">Register as</label>
                            <select className={`form-select ${styles.formSelect}`} onChange={handleExpand} defaultValue="ROLE_USER" id="reg_role" name="role" required>
                                <option value="ROLE_USER">User</option>
                                <option value="ROLE_LABOUR">Labour Professional</option>
                            </select>
                            </div>

                            {/* <!-- Optional fields for Labour role --> */}
                            {expand!=='d-none' && <>
                            <div id="labourFields" className={`row g-2 ${expand}`}>
                            <div className="col-6">
                                <label htmlFor="skillInput" className="form-label">Sector</label>
                                <select id="skillInput" defaultValue="All" name="sector" className="form-select" >
                                <option value="All" disabled>Select Category</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Plumber">Plumber</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="Painter">Painter</option>
                                <option value="Cleaner">Cleaner</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Cost/Hour</label>
                                <input type="number" className="form-control" name="working_hours" required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Availability</label>
                                <input type="text" className="form-control" placeholder="Mon,Tue...." name="availability" required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Experience (In years)</label>
                                <input type="number" className="form-control" name="experience" min="0" />
                            </div>
                            <div className="col-md-12">
                                <label className="form-label">Preferred Shift</label>
                                <select className="form-select" name="shift" defaultValue="Day">
                                <option>Day</option>
                                <option>Night</option>
                                <option>Flexible</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Summary</label>
                                <textarea className="form-control" name="summary" placeholder='Write something about yourself or any other skills.' rows={1} required />
                            </div>
                            </div> </>}

                            <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" id="terms" required />
                            <label className={`form-check-label ${styles.helper}`} htmlFor="terms">
                                I agree to the Terms & Privacy Policy
                            </label>
                            <div className="invalid-feedback">Please accept the terms.</div>
                            </div>

                            <div className="d-grid mt-3">
                            <button type="submit" className={`btn ${styles.btnBrand}`}>Create account</button>
                            </div> 
                        </form>
                        {showRegisterErrorMessage && <div className="errorMessage" style={{color:"red"}}>
                            Registration Failed. User Already Exists!
                        </div>}
                        {showRegisterSuccessMessage && <div className="errorMessage" style={{color:"green"}}>
                            Registration Successful. Welcome to LaboursHub!
                        </div>}
                    </div>
                </div>

                <p className={`${styles.helper} text-center mt-3 mb-0`}>
                    Tip: Choose “Labour Professional” to add more details.
                </p>
                </div>
            </div>
        </div>
    )
}
