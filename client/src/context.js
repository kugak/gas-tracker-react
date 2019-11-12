import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    record_list: [],
    amount_sum: 0,
    litres_sum: 0,
    km_max: 0
  };

  componentDidMount() {
    axios
      .get("/api/tracker")
      .then(res => {
        // console.log(res.data);
        const record_list_arr = res.data;
        // console.log(record_list_arr);
        // {
        //   this.res.data.map(({ amount, endkm, litres }) => console.log(amount));
        // }

        // var arr = record_list_arr.map(amount => ({
        //   amount: record_list_arr[amount]
        // }));
        // console.log(arr);
        var amount_sum = 0;
        var litres_sum = 0;
        var km_max = 0;
        var curr_date = new Date();
        var month_km_arr = [];

        const date = new Date();
        const month = date.getMonth();

        for (var i = 0; i < record_list_arr.length; i++) {
          // console.log(record_list_arr[i]['amount']);
          amount_sum += record_list_arr[i]["amount"];
          litres_sum += record_list_arr[i]["litres"];
          curr_date = new Date(record_list_arr[i]["date"]);
          // console.log(month + 1);
          // console.log(curr_date.getMonth());
          if (curr_date.getMonth() === month) {
            month_km_arr.push(record_list_arr[i]["endkm"]);
          }
        }
        var month_km = month_km_arr[month_km_arr.length - 1] - month_km_arr[0];
        console.log(month_km);

        // console.log("min " + month_min);
        // console.log("max " + month_max);
        // console.log(amount_sum);
        // console.log('sum ' + sum);
        this.setState({
          record_list: res.data,
          amount_sum,
          litres_sum,
          km_max,
          month_km
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
