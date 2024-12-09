import { useState, useEffect } from "react";
import EmployeesContainer from "./EmployeesContainer";
import Search from "./Search";

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [submit, setSubmit] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(
          "https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood"
        );
        const data = await response.json();
        setEmployees(data);
        setFilteredEmployees(data);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  useEffect(() => {
    if (submit) {
      setFilteredEmployees(
        employees.filter((employee) =>
          employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredEmployees(employees);
    }
  }, [searchTerm, employees, submit]);

  // useEffect(() => {
  //   if (submit) {
  //     setFilteredEmployees(
  //       employees.filter((employee) =>
  //         employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setFilteredEmployees(employees);
  //   }
  // }, [searchTerm, employees, submit]);

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} setSubmit={setSubmit} />
      <EmployeesContainer employees={filteredEmployees} />
    </div>
  );
};

export default Employees;
