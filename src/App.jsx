import "./App.css";
import React from "react";
import GoogleMap from "./Components/GoogleMap/GoogleMap";

function App() {
  return (
    <div className="App">
      <h1>Lancez votre propre site d'avis de restaurants</h1>
      <p>Un double clique sur la map pour ajouter un nouveau restaurant</p>
      <GoogleMap />
    </div>
  );
}

export default App;
