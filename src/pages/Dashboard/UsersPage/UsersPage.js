import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Loader from "../../Shared/Loader/Loader";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [load, setLoad]=useState(true)
  useEffect(() => {
    setLoad(true)
    fetch("https://protected-anchorage-52714.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setLoad(false)
      });
  }, []);
  if(load){
      return (<Loader/>)
  }
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
             users.map((user,index)=> <tr key={user._id}>
           
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
