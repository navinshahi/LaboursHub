import React, { useEffect, useState } from 'react';
import styles from './css/UserDashboard.module.css';
import {stateToCities,states} from './data/StateCityData.js';
import { useAuth } from './security/AuthContext.js';
import { getUserByUsername, updateUser } from './api/LaboursHubApiService.js';

export default function UserDashboard() {
  
  const [popupProfile, setPopupProfile] = useState("none");
  const [popupPhoto, setPopupPhoto] = useState("none");
  const [popupAcc, setPopupAcc] = useState("none");
  const [cities,setCities] = useState([]);
  const [userData, setUserData] = useState({});
  const [showUpdateSuccessMessage,setShowUpdateSuccessMessage] = useState(false);
  const [showUpdateErrorMessage,setShowUpdateErrorMessage] = useState(false);


  const authContext = useAuth();

  const user_email = authContext.username;

  useEffect(() => refreshUserData(),[]);// eslint-disable-line react-hooks/exhaustive-deps

  function refreshUserData() {
      getUserByUsername(user_email)
      .then((response) => setUserData(response.data))
      .catch((error) => console.log(error));
  }

  const imgSrc = userData?.pic_name? `/UserPhotos/${userData.pic_name}`: `/DefaultImage.jpg`;

  const popupEditProfile = () => {
    setPopupProfile("flex");
  }
  const closeProfilePopup = () => {
    setPopupProfile("none");
    setShowUpdateErrorMessage(false);
    setShowUpdateSuccessMessage(false);
  }

  const popupEditPhoto = () => {
    setPopupPhoto("flex");
  }
  const closePhotoPopup = () => {
    setPopupPhoto("none");
  }

  const popupAccountUpdate = () => {
    setPopupAcc("flex");
  }
  const closeAccountUpdate = () => {
    setPopupAcc("none");
  }

  const handleCity = (event) => {
    setCities(stateToCities[event.target.value]);
  }

  async function handleUpdate(e){
      e.preventDefault();
      const fd = new FormData(e.currentTarget);
      const data = {
        user_id: userData.user_id,
        user_name: fd.get('username'),
        user_email: userData.user_email,
        user_password: userData.user_password,
        contact: fd.get('contact'),
        bookmark_labour: userData.bookmark_labour,
        address: fd.get('address'),
        pin_code: fd.get('pincode'),
        state: fd.get('state'),
        city: fd.get('city'),
        pic_name: userData.pic_name
      }
      try{
        await updateUser(data);
        setShowUpdateSuccessMessage(true);
        setShowUpdateErrorMessage(false);
        refreshUserData();
      }
      catch(e){
        setShowUpdateErrorMessage(true);
        setShowUpdateSuccessMessage(false);
      }
    }

  function handleDelete(){

    if(window.confirm("Are you sure you want to Delete your profile Permanently?")){
      console.log("Yes");
    }
    else{
      console.log("No");
    }
  }

  return (

    <div className={styles.body1}>
      <div className={`container py-4 ${styles.pageBg}`}>
        <div className="row g-4">
          {/* Left: profile + change photo */}
          <div className="col-lg-4">
            <div className={`card shadow-sm ${styles.cardRounded}`}>
              <div className="card-body text-center">
                <img src={imgSrc} alt="Profile" className={`${styles.profilePic} mb-3`} onError={(e)=> (e.currentTarget.src='/DefaultImage.jpg')} />
                <h5 className="mb-3">{userData.user_name}</h5>

                {/* Open Change Photo popup (CSS-only) */}
                <button className="btn btn-outline-primary w-100 mb-3" onClick={popupEditPhoto}>
                  Change Profile Picture
                </button>

                <table className="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row" className="text-start col-4">Email :</th>
                      <td className="text-start col-8 text-muted">{userData.user_email}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start col-4">Phone :</th>
                      <td className="text-start col-8 text-muted">{userData.contact}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: details + rating + edit button */}
          <div className="col-lg-8">
            <div className={`card shadow-sm ${styles.cardRounded}`}>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h5 className="mb-0">User Profile Details</h5>
                  <span className="badge text-bg-light">ID: {userData.user_id}</span>
                </div>
                <p className="text-muted mb-3">View and manage your information.</p>

                <div className={styles.field}>
                  <div className={styles.label}>Name</div>
                  <div>{userData.user_name}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Address</div>
                  <div>{userData.address}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>State</div>
                  <div>{userData.state}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>City</div>
                  <div>{userData.city}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Pin Code</div>
                  <div>{userData.pin_code}</div>
                </div>

                <div className='row'>
                  <div className="col mt-3">
                    <button className="btn btn-outline-danger" onClick={handleDelete}>Delete Profile</button>
                  </div>
                  <div className="col text-end mt-3">
                    <button className="btn btn-outline-secondary mx-2" onClick={popupAccountUpdate}>Update Account Details</button>
                    <button className="btn btn-primary" onClick={popupEditProfile}>Edit Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CSS-only Popup: Change Photo */}
      <div className={styles.modalMask} aria-hidden="true" style={{display:popupPhoto}}>
        <div className={styles.modalCard} role="dialog" aria-modal="true" aria-labelledby="photoModalTitle">
          <div className={`d-flex justify-content-between align-items-center ${styles.modalHeader}`}>
            <h6 id="photoModalTitle" className="mb-0">Change Profile Picture</h6>
            <button className="btn btn-sm btn-outline-secondary" onClick={closePhotoPopup}>Close</button>
          </div>
          <div className={styles.modalBody}>
            <form id="uploadForm" action="/update-photo" method="post" encType="multipart/form-data" className="row g-3">
              <div className="col-12">
                <label className="form-label">Choose new photo</label>
                <input type="file" name="photo" accept="image/*" className="form-control" required />
                <div className="form-text">JPG/PNG up to 2MB; square image recommended.</div>
              </div>
              <div className="col-12">
                <label className="form-label">Alt text (optional)</label>
                <input type="text" name="alt" className="form-control" placeholder={`e.g., Portrait of ${userData.user_name}`} />
              </div>
            </form>
          </div>
          <div className={styles.modalFooter}>
            <button className="btn btn-light" onClick={closePhotoPopup}>Cancel</button>
            <button type="submit" form="uploadForm" className="btn btn-success">Upload</button>
          </div>
        </div>
      </div>

      {/* Popup Account Details update */}

      <div className={styles.modalMask} aria-hidden="true" style={{display:popupAcc}}>
        <div className={styles.modalCard} role="dialog" aria-modal="true" aria-labelledby="photoModalTitle">
          <div className={`d-flex justify-content-between align-items-center ${styles.modalHeader}`}>
            <h6 id="photoModalTitle" className="mb-0">Create New Password</h6>
            <button className="btn btn-sm btn-outline-secondary" onClick={closeAccountUpdate}>Close</button>
          </div>
          <div className={styles.modalBody}>
            <form id="uploadForm" encType="multipart/form-data" className="row g-3">
              <div className="col-12">
                <label className="form-label">Password</label>
                <input type="password" name="labour_password" className="form-control" placeholder="Enter new password" required />
              </div>
              <div className="col-12">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm your password" />
              </div>
              <div className={styles.modalFooter}>
                <button className="btn btn-light" onClick={closeAccountUpdate}>Cancel</button>
                <button type="submit" form="uploadForm" className="btn btn-success">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {/* CSS-only Popup: Edit Profile */}
      <div className={styles.modalMask} aria-hidden="true" style={{display:popupProfile}}>
        <div className={styles.modalCard} role="dialog" aria-modal="true" aria-labelledby="editModalTitle">
          <div className={`d-flex justify-content-between align-items-center ${styles.modalHeader}`}>
            <h6 id="editModalTitle" className="mb-0">Edit Profile</h6>
            <button className="btn btn-sm btn-outline-secondary" onClick={closeProfilePopup}>Close</button>
          </div>
          <div className={styles.modalBody}>
            <form id="editForm" action="/update-profile" onSubmit={handleUpdate} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="username" defaultValue={userData.user_name} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Contact Number</label>
                <input type="tel" inputMode="tel" className="form-control" name="contact" defaultValue={userData.contact} required />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea className="form-control" name="address" rows={2} defaultValue={userData.address} required />
              </div>
              <div className="mb-3">
                <label htmlFor="state" className="form-label">State</label>
                <select id="state" name="state" className="form-select" defaultValue="default" onChange={handleCity} required>
                  <option value="default" selected disabled>Select a state/UT</option>
                  {states.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <div className="form-text">Choose your state or UT.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">City</label>
                <select id="city" name="city" defaultValue="default" className="form-select" required>
                  <option value="default" selected disabled>Select a City</option>
                  {cities.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Pin Code</label>
                <input type="text" className="form-control" name="pincode" defaultValue={userData.pin_code} required />
              </div>
              <div className={styles.modalFooter}>
                <button className="btn btn-light" onClick={closeProfilePopup}>Cancel</button>
                <button type="submit" form="editForm" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
            {showUpdateErrorMessage && <div className="errorMessage" style={{color:"red"}}>
              Something went wrong. Please check the details carefully!
              </div>}
            {showUpdateSuccessMessage && <div className="errorMessage" style={{color:"green"}}>
              Your details has been successfully updated!
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
