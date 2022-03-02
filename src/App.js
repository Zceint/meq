import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Chart from "./components/Chart";

function App() {
  const [weather, setWeather] = useState([]);

  return (
    <div className="App">
      <Header setWeather={setWeather} />
      <Chart weather={weather} />
    </div>
  );
}

export default App;
