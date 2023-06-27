import React from 'react';
import EditableTable from "./components/EditableTable";

function App() {
  const columns = [
    { field: 'id', fieldName: '#' },
    { field: 'firstName', fieldName: 'First Name' },
    { field: 'lastName', fieldName: 'Last Name' },
    { field: 'role', fieldName: 'User\'s role' },
  ];

  const data = [
    { id: 1, firstName: 'John', lastName: 'Doe', role: 'Admin' },
    { id: 2, firstName: 'John', lastName: 'Smith', role: 'Editor' }
  ];

  return (
    <>
      <EditableTable columns={columns} rows={data} actions />
    </>
  );
}

export default App;
