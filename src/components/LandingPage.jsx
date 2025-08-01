import { useNavigate } from "react-router-dom";

import "../assets/LandingPageAsset.png"; // Import CSS

function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/search");
  };

  return (
    <div className="landing-page">
      <h1>Ready Set And Search!</h1>
      <h1> </h1>
      <div className="landing-page-start-engine">
      <button onClick={handleStart} >Start Search</button>
      </div>
    </div>
  );
}

export default LandingPage;
