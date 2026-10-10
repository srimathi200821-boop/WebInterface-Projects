import React, { useState } from "react";

function Converter() {
  const [category, setCategory] = useState("Length");
  const [value, setValue] = useState("");
  const [from, setFrom] = useState("Meter");
  const [to, setTo] = useState("Kilometer");
  const [result, setResult] = useState("");

  const units = {
    Length: ["Meter", "Kilometer", "Centimeter", "Millimeter"],
    Weight: ["Kilogram", "Gram", "Milligram", "Pound"],
    Temperature: ["Celsius", "Fahrenheit", "Kelvin"],
    Time: ["Second", "Minute", "Hour", "Day"],
    Area: ["Square Meter", "Square Kilometer", "Square Centimeter"],
    Volume: ["Liter", "Milliliter", "Cubic Meter"],
    Speed: ["Meter/Second", "Kilometer/Hour", "Mile/Hour"],
    Data: ["Byte", "Kilobyte", "Megabyte", "Gigabyte"]
  };

  const convert = () => {
    if (value === "") {
      setResult("Please enter a value");
      return;
    }

    let num = Number(value);
    let answer = 0;

    if (category === "Length") {
      const factors = {
        Meter: 1,
        Kilometer: 1000,
        Centimeter: 0.01,
        Millimeter: 0.001
      };

      answer = (num * factors[from]) / factors[to];
    }

    else if (category === "Weight") {
      const factors = {
        Kilogram: 1,
        Gram: 0.001,
        Milligram: 0.000001,
        Pound: 0.453592
      };

      answer = (num * factors[from]) / factors[to];
    }

    else if (category === "Temperature") {
      let celsius;

      if (from === "Celsius")
        celsius = num;
      else if (from === "Fahrenheit")
        celsius = (num - 32) * 5 / 9;
      else
        celsius = num - 273.15;

      if (to === "Celsius")
        answer = celsius;
      else if (to === "Fahrenheit")
        answer = (celsius * 9 / 5) + 32;
      else
        answer = celsius + 273.15;
    }

    else if (category === "Time") {
      const factors = {
        Second: 1,
        Minute: 60,
        Hour: 3600,
        Day: 86400
      };

      answer = (num * factors[from]) / factors[to];
    }

    else if (category === "Area") {
      const factors = {
        "Square Meter": 1,
        "Square Kilometer": 1000000,
        "Square Centimeter": 0.0001
      };

      answer = (num * factors[from]) / factors[to];
    }

    else if (category === "Volume") {
      const factors = {
        Liter: 1,
        Milliliter: 0.001,
        "Cubic Meter": 1000
      };

      answer = (num * factors[from]) / factors[to];
    }

    else if (category === "Speed") {
      const factors = {
        "Meter/Second": 1,
        "Kilometer/Hour": 0.277778,
        "Mile/Hour": 0.44704
      };

      answer = (num * factors[from]) / factors[to];
    }

    else if (category === "Data") {
      const factors = {
        Byte: 1,
        Kilobyte: 1024,
        Megabyte: 1024 ** 2,
        Gigabyte: 1024 ** 3
      };

      answer = (num * factors[from]) / factors[to];
    }

    setResult(Number(answer.toFixed(6)));
  };

  const changeCategory = (e) => {
    const newCategory = e.target.value;

    setCategory(newCategory);
    setFrom(units[newCategory][0]);
    setTo(units[newCategory][1]);
    setResult("");
  };

  return (
    <div className="converter-page">
      <h1>Unit Converter</h1>
      <p>Convert your values quickly and accurately.</p>

      <div className="converter-box">
        <label>Category</label>

        <select value={category} onChange={changeCategory}>
          {Object.keys(units).map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <div className="input-row">
          <div>
            <label>Enter Value</label>

            <input
              type="number"
              placeholder="Enter value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          <div>
            <label>From</label>

            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {units[category].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="swap">⇄</div>

          <div>
            <label>To</label>

            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {units[category].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>

        <button className="convert-btn" onClick={convert}>
          Convert
        </button>

        <div className="result-box">
          <p>RESULT</p>
          <h2>{result || "—"}</h2>
        </div>
      </div>
    </div>
  );
}

export default Converter;