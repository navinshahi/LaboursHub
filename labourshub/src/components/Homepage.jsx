import { Link, useNavigate } from 'react-router-dom'
import styles from './css/Homepage.module.css'
import labourpic1 from './Pictures/6db2423d-8062-4e82-b15c-7603afefc960.webp'
import labourpic2 from './Pictures/a33e510b-1882-4506-9d01-4f217acb59f2.webp'
import { getNumberOfCities, getNumberOfLabours } from './api/LaboursHubApiService'
import { useEffect, useState } from 'react'
import {stateToCities,states} from './data/StateCityData.js'

export default function Homepage() {

    const [numberOfLabours, setNumberOfLabours] = useState(0);
    const [numberOfCities, setNumberOfCities] = useState(0);
    const [cities,setCities] = useState(stateToCities['Andhra Pradesh'])

    const navigate = useNavigate();

    const handleCity = (event) => {
        setCities(stateToCities[event.target.value])
    }

    useEffect(() =>{ updateDetails()},[]);// eslint-disable-line react-hooks/exhaustive-deps

    function updateDetails() {

        getNumberOfLabours()
        .then((response) => setNumberOfLabours(response.data))
        .catch((error) => console.log(error));

        getNumberOfCities()
        .then((response) => setNumberOfCities(response.data))
        .catch((error) => console.log(error));
        
    }

    function handleSubmit(e){
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const state = fd.get('state');
        const city = fd.get('city');
        const category = fd.get('category');
        navigate('/labours-list',{state:{city:city,category:category,state1:state}});
    }

    return (
        <div>
            <header className={`${styles.hero} py-5`}>
                <div className="container py-4">
                <div className="row align-items-center gy-4">
                    <div className="col-lg-7">
                    <h1 className="display-5 fw-bold">Find trusted labours in your city</h1> 
                    <p className="lead text-muted mt-2">Search by State, City & Category to view Available Labours, Compare profiles, and Contact directly.</p> 
                    <div className="bg-white border rounded-3 p-3 mt-4 shadow-sm">
                        <form id="searchForm" onSubmit={handleSubmit} className="row g-2">
                        <div className="col-md-5">
                            <label htmlFor="state" className="form-label">State</label>
                            <select id="state" name="state" className="form-select" defaultValue="Andhra Pradesh" onChange={handleCity} required>
                                {states.map((item) => (
                            <option key={item}>{item}</option>
                                ))}
                            </select>
                            <div className="form-text">Choose your state or UT.</div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="city" className="form-label">City</label>
                            <select id="city" name="city" defaultValue="Visakhapatnam" className="form-select" required>
                                {cities.map((item) => (
                            <option key={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="skillInput" className="form-label">Category</label>
                            <select id="skillInput" defaultValue="Any" name="category" className="form-select" required>
                            <option value="Any">Any</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Plumber">Plumber</option>
                            <option value="Carpenter">Carpenter</option>
                            <option value="Painter">Painter</option>
                            <option value="Cleaner">Cleaner</option>
                            </select>
                        </div>
                        <div className="d-grid">
                            <button className="btn btn-outline-primary" type="submit">Search Available Labours in your Area</button> 
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-lg-5">
                    <div className="ratio ratio-16x9 rounded-4 shadow-sm">
                        <img alt="Workers illustration" className="w-100 h-100 object-fit-cover rounded-4"
                            src={labourpic1}/> 
                    </div>
                    </div>
                </div>
                </div>
            </header>
            
            <section id="stats" className="py-5 bg-light border-top border-bottom">
            <div className="container">
                <div className="row align-items-center g-4">
                <div className="col-md-6 order-md-1 order-2">
                    <img
                    src={labourpic2}
                    alt="Workers"
                    className="img-fluid rounded-4 shadow-sm"/>
                </div>

                <div className="col-md-6 order-md-2 order-1">
                    <div className="text-center text-md-start">
                    <h2 className="fw-bold mb-4">Platform Statistics</h2>
                    <div className="p-4 shadow-sm rounded-4 bg-white d-inline-block">
                        <div className="display-4 fw-bold text-primary" id="totalLabours">{numberOfLabours}</div>
                        <p className="text-muted mb-0">Labours registered so far</p>
                    </div>
                    <div className="p-4 shadow-sm rounded-4 bg-white d-inline-block mx-4 my-3">
                        <div className="display-4 fw-bold text-primary" id="totalLabours">{numberOfCities}</div>
                        <p className="text-muted mb-0">Cities covered so far</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section id="how" className="py-5 bg-light">
                <div className="container">
                <h2 className="fw-bold">How it works</h2>
                <div className="row g-4 mt-1">
                    <div className="col-md-4">
                    <div className={`card h-100 ${styles.cardHover} hover-overlay`}>
                        <div className="card-body">
                        <h5 className="card-title">1. Search by city</h5>
                        <p className="card-text text-muted">Enter a city and optionally a category to view local labours.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className={`card h-100 ${styles.cardHover}`}>
                        <div className="card-body">
                        <h5 className="card-title">2. Compare profiles</h5>
                        <p className="card-text text-muted">Check name, phone, address, working hours, and charge per day/hour.</p> 
                        </div>
                    </div> 
                    </div>
                    <div className="col-md-4">
                    <div className={`card h-100 ${styles.cardHover}`}>
                        <div className="card-body">
                        <h5 className="card-title">3. Contact or book</h5>
                        <p className="card-text text-muted">Call directly to discuss availability and confirm details.</p>
                        </div>
                    </div> 
                    </div>
                </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                <div className="p-4 p-md-5 bg-primary text-white rounded-3 d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                    <div>
                    <h3 className="fw-bold mb-1">Are you a labour professional?</h3>
                    <p className="mb-0">Create your profile to get discovered by people in your city.</p>
                    </div>
                    <Link to="/login"><button className="btn btn-light mt-3 mt-md-0" data-bs-target="#registerModal">Register now</button></Link> 
                </div>
                </div>
            </section>
        </div>
    )
}
