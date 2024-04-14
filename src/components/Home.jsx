import { useState } from "react";
import AboutPopUp from "./popups/AboutPopUp";

const Home = () => {
  const [isAboutPopUp, setIsAboutPopUp] = useState(false);

  const toggleAboutPopUp = () => {
    setIsAboutPopUp(!isAboutPopUp);
  };

  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    <>
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title"> The Bad Bank</h5>
          <div className="card-body">
            <p className="card-text">
              <b>Welcome!</b>
              <br></br>
              <br></br>
              Safest bank in the universe.
              <br></br>
              We promise to protect your money and data!
              <br></br>

              <span className="bad-policy-practice"></span>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-container">
        <button onClick={toggleAboutPopUp} className="btn btn-primary">
          Learn More
        </button>
      </div>

      {isAboutPopUp && <AboutPopUp handleClose={toggleAboutPopUp} />}
    </>
  );
};

export default Home;
