import React, { Component, Fragment } from 'react';

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <div className='row'>
          {/* Summary */}
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-sm'>
                <div className='card text-white bg-info mb-3'>
                  <div className='card-body'>
                    <h2 className='card-title'>1,235</h2>
                    <p className='card-text'>Monthly KM</p>
                  </div>
                </div>
              </div>
              <div className='col-sm'>
                <div className='card text-white bg-info mb-3'>
                  <div className='card-body'>
                    <h2 className='card-title'>328.20</h2>
                    <p className='card-text'>Total Litres</p>
                  </div>
                </div>
              </div>

              <div className='col-sm'>
                <div className='card text-white bg-info mb-3'>
                  <div className='card-body'>
                    <h2 className='card-title'>$ 374.12</h2>
                    <p className='card-text'>Total Spend</p>
                  </div>
                </div>
              </div>

              <div className='col-sm'>
                <div className='card text-white bg-info mb-3'>
                  <div className='card-body'>
                    <h2 className='card-title'>$ 1.14</h2>
                    <p className='card-text'>Average Price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Summary;
