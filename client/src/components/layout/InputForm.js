import React, { Component, Fragment, useState } from "react";
import axios from "axios";
const InputForm = () => {
  const [formData, setFromData] = useState({
    date: "",
    amount: "",
    litres: "",
    endkm: ""
  });

  // Destructure
  const { date, amount, litres, endkm } = formData;

  const onChange = e =>
    setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    const newRecord = {
      date,
      amount,
      litres,
      endkm
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newRecord);
      const res = await axios.post("/api/tracker", body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)} className="form">
        <div className="row m-5">
          {/* Date */}
          <div className="col-md-4 p-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  Date
                </span>
              </div>
              <input
                type="date"
                className="form-control"
                name="date"
                value={date}
                onChange={e => onChange(e)}
                required
              />
            </div>
          </div>

          {/* Amount */}
          <div className="col-md-2 p-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="number"
                value={amount}
                onChange={e => onChange(e)}
                step="0.01"
                className="form-control"
                name="amount"
                required
              />
            </div>
          </div>

          {/* End KM */}
          <div className="col-sm p-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  End KM
                </span>
              </div>
              <input
                type="number"
                value={endkm}
                onChange={e => onChange(e)}
                className="form-control"
                name="endkm"
                required
              />
            </div>
          </div>

          {/* Litres */}
          <div className="col-sm p-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  Litres
                </span>
              </div>
              <input
                type="number"
                value={litres}
                onChange={e => onChange(e)}
                className="form-control"
                name="litres"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success btn-lg btn-block mt-3"
          >
            Add Expense
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default InputForm;
