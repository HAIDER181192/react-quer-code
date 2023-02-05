import {React, useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useQuery } from "react-query";
import { Table } from "reactstrap";
import { Model } from "./Model";
import { CreateUser } from "./CreateUser";
import { DeleteUser } from "./DeleteUser";

//import Spinner from 'react-bootstrap/Spinner';
const Users = (args) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  async function getUsers() {
    const response = await fetch("http://localhost:3001/users");
    return response.json();
  }

  const { data, isLoading } = useQuery("users", getUsers);
  // if(isLoading){
  //   return <Spinner animation="grow" />;
   
  // }
  console.log(data);
  return (
    <>
      <h1>React Query</h1>
      <h3>User List</h3>
      < CreateUser/>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((e) => (
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.age}</td>
                <td>
                <td>
                  <Model id={e.id} /> 
                </td>
                <td>
                  <DeleteUser id={e.id} /> 
                </td>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users
