import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context';

class DataTable extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // console.log(value);

          const { record_list } = value;

          if (record_list === undefined || record_list.length === 0) {
            return <React.Fragment>Loading</React.Fragment>;
          } else {
            return (
              <React.Fragment>
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
                    {record_list.map(item => (
                      <tr key={item._id}>
                        <th scope='row'>{item.date}</th>
                        <td>{item.litres}</td>
                        <td>{item.amount}</td>
                        <td>{item.endkm}</td>
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
