import React, { Component, Fragment } from "react";
import { Consumer } from "../../context";
import Spinner from "./Spinner";
import Moment from "react-moment";
import NumberFormat from "react-number-format";

class DataTable extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // console.log(value);

          const { record_list } = value;

          if (record_list === undefined || record_list.length === 0) {
            return (
              <React.Fragment>
                <Spinner />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <table className="table table-hover mt-5">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Litre</th>
                      <th scope="col">Price</th>
                      <th scope="col">End KM</th>
                      <th scope="col">Price per Litre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record_list.map(item => (
                      <tr key={item._id}>
                        <th scope="row">
                          <Moment format="ddd MMM DD, YYYY">{item.date}</Moment>
                        </th>
                        <td>
                          <NumberFormat
                            value={item.litres}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </td>
                        <td>
                          <NumberFormat
                            value={item.amount}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$ "}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </td>
                        <td>
                          <NumberFormat
                            value={item.endkm}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </td>
                        <td>
                          <NumberFormat
                            value={item.amount / item.litres}
                            displayType={"text"}
                            prefix={"$ "}
                            thousandSeparator={true}
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default DataTable;
