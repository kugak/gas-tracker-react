import React, { Component, Fragment } from "react";
import { Consumer } from "../../context";
import Spinner from "./Spinner";
import NumberFormat from "react-number-format";

class Summary extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);

          const { record_list, amount_sum, litres_sum, month_km } = value;

          if (record_list === undefined || record_list.length === 0) {
            return (
              <Fragment>
                <Spinner />
              </Fragment>
            );
          } else {
            return (
              <Fragment>
                <div className="row">
                  {/* Summary */}
                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-sm">
                        <div className="card text-white bg-info mb-3">
                          <div className="card-body">
                            <h2 className="card-title">
                              <NumberFormat
                                value={month_km}
                                displayType={"text"}
                                thousandSeparator={true}
                                decimalScale={2}
                              />
                            </h2>
                            <p className="card-text">Current KM</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="card text-white bg-info mb-3">
                          <div className="card-body">
                            <h2 className="card-title">
                              <NumberFormat
                                value={litres_sum}
                                displayType={"text"}
                                thousandSeparator={true}
                                decimalScale={2}
                              />
                            </h2>
                            <p className="card-text">Total Litres</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm">
                        <div className="card text-white bg-info mb-3">
                          <div className="card-body">
                            <h2 className="card-title">
                              <NumberFormat
                                value={amount_sum}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$ "}
                                decimalScale={2}
                              />
                            </h2>
                            <p className="card-text">Total Spend</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm">
                        <div className="card text-white bg-info mb-3">
                          <div className="card-body">
                            <h2 className="card-title">
                              <NumberFormat
                                value={amount_sum / litres_sum}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$ "}
                                decimalScale={2}
                              />
                            </h2>
                            <p className="card-text">Average Price</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Summary;
