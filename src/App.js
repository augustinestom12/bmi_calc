import React, { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calBmi = (event) => {
    event.preventDefault();
    let r = weight / height;
    setBmi(r);
    if (r < 25) {
      setMessage("Underweight");
    } else if (r >= 25 && r < 30) {
      setMessage("Healthy weight");
    } else {
      setMessage("Overweight");
    }
  };

  const clearFields = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
    setMessage("");
  };

  return (
    <>
      <div className="container">
        <div className="">
          <h2>BMI Calculator</h2>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Height (in m)
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default "
              placeholder="enter height"
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Weight (in kg)
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="enter weight"
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={calBmi}>
            Submit
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onClick={clearFields}
          >
            Clear
          </button>

          <div className="">
            <h2>Your BMI is: {bmi} </h2>
            <p>You are: {message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
