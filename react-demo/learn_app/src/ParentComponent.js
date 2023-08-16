//ParentComponent.js - File
import React from 'react';
import Table from './Props';
const ParentComponent = () => {
  const name = 'Yash';
  const age = 20;
  return (
    <div>
      <Table name={name} age={age}/>
    </div>
  );
};
export default ParentComponent;