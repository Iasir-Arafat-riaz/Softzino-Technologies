import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2 className="pt-3">All Registered users here</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            
            <th>#</th>
            <th>User Name</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
         {
             users.map((user,index)=> <tr>
           
                <td>{index+1}</td>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
              </tr>)
         }
        </tbody>
      </Table>
    </div>
  );
};

export default UsersPage;
