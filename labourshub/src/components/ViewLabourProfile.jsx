import { useLocation } from 'react-router-dom';
import styles from './css/LabourDashboard.module.css';
import StarRating from './data/StarRating';

export default function ViewLabourProfile() {

  const labourData = useLocation();

  const imgSrc = labourData.state?.pic_name? `/LabourPhotos/${labourData.state.pic_name}`: `/DefaultImage.jpg`;


  return (

    <div className={styles.body1}>
      <div className={`container py-4 ${styles.pageBg}`}>
        <div className="row g-4">
          {/* Left: profile */}
          <div className="col-lg-4">
            <div className={`card shadow-sm ${styles.cardRounded}`}>
              <div className="card-body text-center">
                <img src={imgSrc} alt="Profile" className={`${styles.profilePic} mb-3`} onError={(e)=> (e.currentTarget.src='/DefaultImage.jpg')} />
                <h5 className="mb-1">{labourData.state.labour_name}</h5>
                <div className="text-muted mb-3">{labourData.state.sector}</div>

                <table className="table table-sm table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row" className="text-start col-4">Email :</th>
                      <td className="text-start col-8 text-muted">{labourData.state.labour_email}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start col-4">Phone :</th>
                      <td className="text-start col-8 text-muted">{labourData.state.contact}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start col-4">Address :</th>
                      <td className="text-start col-8 text-muted">{labourData.state.address}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start col-4">State :</th>
                      <td className="text-start col-8 text-muted">{labourData.state.state}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start col-4">City :</th>
                      <td className="text-start col-8 text-muted">{labourData.state.city}</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-start col-4">Pin Code :</th>
                      <td className="text-start col-8 text-muted">{labourData.state.pin_code}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: details + rating */}
          <div className="col-lg-8">
            <div className={`card shadow-sm ${styles.cardRounded}`}>
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h5 className="mb-0">Labour Profile Details</h5>
                </div>
                <p className="text-muted mb-3">View and manage your information.</p>

                <div className={styles.field}>
                  <div className={styles.label}>Name</div>
                  <div>{labourData.state.labour_name}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Cost/Hour</div>
                  <div>&#8377;{labourData.state.hourly_cost}/hr.</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Contact Number</div>
                  <div> +91{labourData.state.contact}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Availability (Days)</div>
                  <div>{labourData.state.availability}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Experience (In Years)</div>
                  <div>{labourData.state.experience}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Preferred Shift</div>
                  <div>{labourData.state.preferred_shift}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Summary</div>
                  <div>{labourData.state.summary}</div>
                </div>
                <div className={styles.field}>
                  <div className={styles.label}>Overall Rating</div>
                  <div className="d-flex align-items-center gap-2">
                    <StarRating value={labourData.state.rating} />
                    <small className="text-muted">({labourData.state.rating})</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
