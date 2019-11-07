import React, { Fragment } from 'react';
import InputForm from './components/layout/InputForm';
import Summary from './components/layout/Summary';
import DataTable from './components/layout/DataTable';
import { Provider } from './context';
import './App.css';

const App = () => (
  <Provider>
    <Fragment>
      <div className='container'>
        <InputForm />
        <Summary />
        <DataTable />
      </div>
    </Fragment>
  </Provider>
);

export default App;
