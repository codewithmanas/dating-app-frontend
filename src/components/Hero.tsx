import { useState } from "react";

const Hero = () => {
  const [userId, setUserId] = useState("");
  // const [suggestions, setSuggestions] = useState([]);


  const fetchSuggestions = () => {
    console.log("fetching suggestions for user", userId);
  }

  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <h1>Dating App</h1>
      <div>
        <input type="text"
        placeholder="Enter your user id"
        value={userId}
        onChange={(e) => setUserId(e.target.value)} />

        <button onClick={fetchSuggestions}>Get Suggestion</button>
      </div>
    </div>
  );
};

export default Hero;
