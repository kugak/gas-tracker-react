import React, { Component, Fragment } from 'react';

export default class DataTable extends Component {
  render() {
    return (
      <Fragment>
        <table className='table table-hover mt-5'>
          <thead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Litre</th>
              <th scope='col'>Price</th>
              <th scope='col'>End KM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>Aug 7, 2019</th>
              <td>47.57</td>
              <td>$ 54.65</td>
              <td>693</td>
            </tr>
            <tr>
              <th scope='row'>Aug 30, 2019</th>
              <td>11.89</td>
              <td>$ 13.43</td>
              <td>823</td>
            </tr>
            <tr>
              <th scope='row'>Sep 9, 2019</th>
              <td>45.98</td>
              <td>$ 54.27</td>
              <td>1,298</td>
            </tr>
            <tr>
              <th scope='row'>Sep 16, 2019</th>
              <td>32.49</td>
              <td>$ 37.00</td>
              <td>1,621</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  }
}
