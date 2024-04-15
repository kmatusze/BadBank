import { Button, Box } from "@mui/material";
import { Formik } from "formik";

const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">Learn More About The Bad Bank</span>
              <hr />
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                    <h2>The Bad Bank Story</h2>
                    <p>
                      This Bad Bank is now one of the safest banks in the universe due to refactored code for MIT's FullStack Bad Bank Projects.
                      <p></p>
                      <a href="https://executive-ed.xpro.mit.edu/professional-certificate-coding?utm_source=Google&utm_network=g&utm_medium=c&utm_term=mit%20full%20stack%20developer&utm_location=9011929&utm_campaign_id=17059210457&utm_adset_id=135511781189&utm_ad_id=594862351424">
                      MIT - Fullstack Development with MERN
                      </a>
                      <p></p>
                      This bank was once considered The Bad Bank due to the users data exposure and data leaks in the UI (intentionally per se).
                      <br /> <br />
                      It consists of a simple React application where the
                      students apply concepts such as context, routing,form validations. This project will be deployed using AWS S3
                      Buckets.
                   
                      <br /> <br />
                      <div className="features">
                        <div>
                          List of Key Technologies and Libraries used:
                          <ul>
                            <li>React JS</li>
                            <li>Formik</li>
                            <li>React Toastify</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>ChartJS</li>
                            <li>Data Schema(s)</li>
                          </ul>
                        </div>
                        <div>
                          Key Functionalities available:
                          <ul>
                            <li>Create Account</li>
                            <li>Login to Account</li>
                            <li>Edit Account</li>
                            <li>Transactions List</li>
                            <li>Deposit</li>
                            <li>Withdraw</li>
                            <li>Total Charts and Analytics</li>
                          </ul>
                        </div>
                      </div>
                    </p>
                    <h5>
                      Kara A. Matuszewski <h6>MIT FullStack MERN Student</h6>
                    </h5>

                    <h6>
                      <a href="https://github.com/kmatusze/Fullstack-Bad-Bank">
                        GitHub Repository
                      </a>
                    </h6>
                  </div>
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopUp;
