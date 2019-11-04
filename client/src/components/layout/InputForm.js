import React, { Component, Fragment, useState } from 'react';

const InputForm = () => {
  const [formData, setFromData] = useState({
    date: '',
    amount: '',
    litres: '',
    endkm: ''
  });

  // Destructure
  const { date, amount, litres, endkm } = formData;

  const onChange = e =>
    setFromData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)} className='form'>
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
                type='text'
                className='form-control'
                name='date'
                value={date}
                onChange={e => onChange(e)}
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
                value={amount}
                onChange={e => onChange(e)}
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
                value={endkm}
                onChange={e => onChange(e)}
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
                value={litres}
                onChange={e => onChange(e)}
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
