// LabourList.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllLaboursByCity, getAllLaboursByCityAndCategory } from "./api/LaboursHubApiService";
import StarRating from "./data/StarRating";

export default function ViewLabours() {

  const location  = useLocation();
  const [labourData, setLabourData] = useState([]);

  const navigate = useNavigate();

  // eslint-disable-next-line
  useEffect(() => {refreshLabourData()},[]); 
  
  function refreshLabourData() {
    if(location.state.category==='Any'){
      getAllLaboursByCity(location.state.city)
      .then((response) => setLabourData(response.data))
      .catch((error) => console.log(error));
    }
    else{
      getAllLaboursByCityAndCategory(location.state.city,location.state.category)
      .then((response) => setLabourData(response.data))
      .catch((error) => console.log(error));
    }
  }

  function handleView(value){
    navigate('/labour-profile',{state:value});
  }

  return (
    <div className="container py-4">
      <h3 className="mb-4">List of Labours available in {location.state.city}, {location.state.state1}</h3>

      {labourData.length===0 && <p>Sorry, No results found! We're coming to your area soon.</p>}

      {/* Responsive grid: 1 per row on xs, 2 on md, 3 on lg, 4 on xl */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {labourData.map((labour) => (
          <div className="col" key={labour.labour_id}>
            <div className="card border-info h-100 overflow-x-auto shadow-sm">
              <div class="card-header">{labour.labour_name}</div>
              <div className="card-body">
                <p className="card-text mb-2"><span className="text-muted">Contact:</span> +91{labour.contact}</p>
                <p className="card-text mb-2"><span className="text-muted">City:</span> {labour.city}</p>
                <p className="card-text mb-2"><span className="text-muted">Profession:</span> {labour.sector}</p>
                <p className="card-text mb-2"><span className="text-muted">Cost:</span> &#8377;{labour.hourly_cost}/hr.</p>
                <div className="d-flex align-items-center gap-2">
                  <StarRating value={labour.rating} />
                  <small className="text-muted">({labour.rating.toFixed(1)})</small>
                </div>
              </div>
              <div className="card-footer bg-white border-0 pt-0">
                <button onClick={() => handleView(labour)} className="btn btn-outline-primary w-100">View Complete Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
