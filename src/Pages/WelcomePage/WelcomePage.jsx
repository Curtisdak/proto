import { useState } from "react";
import { useNavigate } from "react-router-dom";
import welcomePage from "../../assets/welcomePage.mp4"

import "./welcomePage.css";

const WelcomePage = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

const handleInput =(e)=>{
  setName(e.target.value)
}
  const handleButtonClick = () => {
    if (name === "") {
      return alert(` Don't forget to write your name!`);
    } else {
      navigate("/Home/HomePage");
    }
  };

  return (
    <div>
      <div class="video-container">
        <video muted loop autoPlay>
          <source src={welcomePage} type="video/mp4"></source>
        </video>
      </div>
      <div className="welcome-container">
        <h1>Feel the Nature</h1>
        <input
          className="input-field"
          type="text"
          placeholder="Enter your name"
          value={name}
          required
          onChange={handleInput}
        />
        <button className="submit-button" onClick={handleButtonClick}>
          Validate
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
