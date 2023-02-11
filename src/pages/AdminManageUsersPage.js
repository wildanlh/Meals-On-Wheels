import { useContext, useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton, Table } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import { getAdminUserActiveAPI, getAdminUserAPI } from "../api/admin-api";

import "./css/AdminManageUsersPage.css";
import { user_type } from "../context/context-type";

const AdminManageUsersPage = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([user_type]);
  const [msg, setMsg] = useState("");

  function handleActive(id) {
    getAdminUserActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAdminUserAPI(token)
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5 fw-bold">Manage Users</h1>
        {msg && <span onClick={() => setMsg("")}>{msg}</span>}
        <div className="card mb-5">
          <div className="container">
            <Table striped className="text-white text-center driver my-3">
              <thead className="driver-table">
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Roles</th>
                  <th>File</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="text-white">{index + 1}</td>
                    <td className="text-white">{user.name}</td>
                    <td className="text-white">{user.address}</td>
                    <td className="text-white">{user.email}</td>
                    <td className="text-white">{user.gender}</td>
                    <td className="text-white">{user.role}</td>
                    <td className="text-white">
                      <a className="link-light" href={user.fileUrl}>
                        file
                      </a>
                    </td>
                    <td className="text-white">
                      <DropdownButton
                        key="start"
                        id="dropdown-button-drop-start"
                        drop="start"
                        title="Action"
                        variant="light"
                        size="sm"
                      >
                        <Dropdown.Item onClick={() => handleActive(user.id)}>
                          approve
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                ))}
                {/* <tr>
                  <td className="text-white">1</td>
                  <td className="text-white">John</td>
                  <td className="text-white">Doe</td>
                  <td className="text-white">Singapore</td>
                  <td className="text-white">John@doe.com</td>
                  <td className="text-white">Male</td>
                  <td className="text-white">Member</td>
                  <td className="text-white">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Action"
                      variant="light"
                      size="sm"
                    >
                      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-white">1</td>
                  <td className="text-white">John</td>
                  <td className="text-white">Doe</td>
                  <td className="text-white">Singapore</td>
                  <td className="text-white">John@doe.com</td>
                  <td className="text-white">Male</td>
                  <td className="text-white">Member</td>
                  <td className="text-white">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Action"
                      variant="light"
                      size="sm"
                    >
                      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
                <tr>
                  <td className="text-white">1</td>
                  <td className="text-white">John</td>
                  <td className="text-white">Doe</td>
                  <td className="text-white">Singapore</td>
                  <td className="text-white">John@doe.com</td>
                  <td className="text-white">Male</td>
                  <td className="text-white">Member</td>
                  <td className="text-white">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title="Action"
                      variant="light"
                      size="sm"
                    >
                      <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr> */}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>

      <div
        className="circle-yellow-lg"
        style={{ bottom: "400px", left: "-100px" }}
      ></div>
      <div
        className="half-circle"
        style={{ bottom: "400px", right: "-50px" }}
      ></div>
    </Layout>
  );
};

export default AdminManageUsersPage;
