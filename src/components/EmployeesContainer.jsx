/* eslint-disable react/prop-types */

const EmployeesContainer = ({ employees }) => {
  return (
    <div>
      <h1>Employees</h1>
      {employees.length > 0 ? (
        employees.map((item) => (
          <div key={item.id}>
            <p>name: {item.name}</p>
            <p>department: {item.department}</p>
            <p>role: {item.role}</p>
          </div>
        ))
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeesContainer;
