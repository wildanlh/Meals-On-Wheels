import { Container, Dropdown, DropdownButton, Table } from "react-bootstrap";
import Layout from "../components/layout/Layout";

import "./css/AdminManageUsersPage.css";

const AdminManageUsersPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5 fw-bold">Manage Users</h1>
        <div className="card mb-5">
          <div className="container">
            <Table striped className="text-white text-center driver my-3">
              <thead className="driver-table">
                <tr>
                  <th>No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Roles</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-white">
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
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AdminManageUsersPage;
