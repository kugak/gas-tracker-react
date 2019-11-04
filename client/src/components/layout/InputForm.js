import React, { Component, Fragment } from 'react';

const InputForm = () => {
  return (
    <Fragment>
      <form action='/' method='post'>
        <div className='row m-5'>
          {/* Date */}
          <div className='col-sm p-2'>
            <div className='input-group input-group-lg'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='inputGroup-sizing-lg'>
                  Date
                </span>
              </div>
              <input
                type='date'
                className='form-control'
                name='date'
                required
              />
            </div>
          </div>

          {/* Amount */}
          <div className='col-sm p-2'>
            <div className='input-group input-group-lg'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>$</span>
              </div>
              <input
                type='number'
                step='0.01'
                className='form-control'
                name='amount'
                required
              />
            </div>
          </div>

          {/* End KM */}
          <div className='col-sm p-2'>
            <div className='input-group input-group-lg'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='inputGroup-sizing-lg'>
                  End KM
                </span>
              </div>
              <input
                type='number'
                className='form-control'
                name='endkm'
                required
              />
            </div>
          </div>

          {/* Litres */}
          <div className='col-sm p-2'>
            <div className='input-group input-group-lg'>
              <div className='input-group-prepend'>
                <span className='input-group-text' id='inputGroup-sizing-lg'>
                  Litres
                </span>
              </div>
              <input
                type='number'
                className='form-control'
                name='litres'
                required
              />
            </div>
          </div>

          <button
            type='submit'
            className='btn btn-success btn-lg btn-block mt-3'
          >
            Add Expense
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default InputForm;
