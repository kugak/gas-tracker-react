import React, { Fragment } from 'react';
import InputForm from './components/layout/InputForm';
import Summary from './components/layout/Summary';
import DataTable from './components/layout/DataTable';
import './App.css';

const App = () => (
  <Fragment>
    <InputForm />
    <Summary />
    <DataTable />
  </Fragment>
);

export default App;
