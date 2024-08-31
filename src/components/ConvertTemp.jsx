import React, { useRef, useState } from "react";
import "./ConvertTemp.css"; // Import the CSS file

const ConvertTemp = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [conversion, setConversion] = useState(true);
  const celsiusRef = useRef(null);
  const fahrenRef = useRef(null);

  const handleConvertCelsius = () => {
    const celsius = celsiusRef.current.value;
    const fahren = (9 / 5) * celsius + 32;
    setFahrenheit(`${fahren.toFixed(2)}°F`);
  };

  const handleConvertFahrenheit = () => {
    const fahren = fahrenRef.current.value;
    const celsius = ((fahren - 32) * 5) / 9;
    setCelsius(`${celsius.toFixed(2)}°C`);
  };

  const handleConversion = () => {
    setConversion((prev) => !prev);
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <div className="card">
      <button onClick={handleConversion} className="toggle-button">
        {conversion ? "Celsius to Fahrenheit" : "Fahrenheit to Celsius"}
      </button>
      {conversion ? (
        <div className="input-container">
          <input
            type="text"
            ref={celsiusRef}
            placeholder="Enter Celsius"
            className="input"
          />
          <button onClick={handleConvertCelsius} className="convert-button">
            Convert Celcius To Fahrenheit
          </button>
          <input
            type="text"
            value={fahrenheit}
            placeholder="Fahrenheit Result"
            readOnly
            className="output"
          />
        </div>
      ) : (
        <div className="input-container">
          <input
            type="text"
            ref={fahrenRef}
            placeholder="Enter Fahrenheit"
            className="input"
          />
          <button onClick={handleConvertFahrenheit} className="convert-button">
            Convert Fharenheit To Celsius
          </button>
          <input
            type="text"
            value={celsius}
            placeholder="Celsius Result"
            readOnly
            className="output"
          />
        </div>
      )}
    </div>
  );
};

export default ConvertTemp;
