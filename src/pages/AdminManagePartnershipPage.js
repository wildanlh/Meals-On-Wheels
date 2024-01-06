import { Fragment, useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { person } from "../assets";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import { getAdminPartnerAPI, getAdminPartnerActiveAPI } from "../api/admin-api";

import "./css/AdminManagePartnershipPage.css";
import { user_type } from "../context/context-type";

const AdminManagePartnershipPage = () => {
  const { token } = useContext(AuthContext);
  const [partner, setPartner] = useState([user_type]);
  const [inactivePartner, setInactivePartner] = useState([user_type]);
  const [msg, setMsg] = useState("");

  function handleAccept(id) {
    getAdminPartnerActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAdminPartnerAPI(token)
      .then((resp) => {
        resp.data = resp.data
          .filter((item) => {
            return item.active === true;
          })
          .map((item) => {
            setPartner(item);
            return item;
          });
        setPartner(resp.data);
      })
      .catch((err) => console.log(err));

    getAdminPartnerAPI(token)
      .then((resp) => {
        resp.data = resp.data
          .filter((item) => {
            return item.active === false;
          })
          .map((item) => {
            setInactivePartner(item);
            return item;
          });
        setInactivePartner(resp.data);
      })
      .catch((err) => console.log(err));
  }, [token, msg]);

  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5 fw-bold">Manage Partner</h1>
        <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3 fw-bold tab-partner" fill>
          <Tab eventKey="partnership-request" title="Partnership Request">
            {msg}
            <div className="card-charity">
              <Row>
                <Table striped className="text-center history-table mb-5 align-middle">
                  <thead className="history-table text-dark">
                    <tr>
                      <th>Company Name</th>
                      <th>Image</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {inactivePartner.map((data) => (
                      <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>
                          <img height="100px" src={data.imageUrl} />
                        </td>
                        <td>{data.address}</td>
                        <td>{data.email}</td>
                        <td>
                          <Button className="button fw-bold" onClick={() => handleAccept(data.id)}>
                            Accept Partnership
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Row>
            </div>
          </Tab>
          <Tab eventKey="registered-partner" title="Registered Partner">
            <div className="card-history my-5">
              <Table striped className="text-center history-table mb-5 align-middle">
                <thead className="history-table text-dark">
                  <tr>
                    <th>Company Name</th>
                    <th>Image</th>
                    <th>Address</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody className="">
                  {partner.map((data) => (
                    <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>
                        <img height="100px" src={data.imageUrl} />
                      </td>
                      <td>{data.address}</td>
                      <td>{data.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Tab>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default AdminManagePartnershipPage;
