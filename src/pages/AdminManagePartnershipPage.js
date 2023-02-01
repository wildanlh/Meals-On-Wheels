import { Button, Col, Container, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { person } from "../assets";
import Layout from "../components/layout/Layout";

import './css/AdminManagePartnershipPage.css';

const AdminManagePartnershipPage = () => {
    return (
        <Layout>
            <Container>
                <h1 className="text-center py-5 fw-bold">Manage Partner</h1>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3 fw-bold tab-partner"
                    fill
                >
                    <Tab eventKey="partnership-request" title="Partnership Request">
                        <Form.Control type="text" placeholder="Search" className="my-3" />
                        <div className="card-charity">
                            <Row>
                                <Col sm={10}>
                                    <div className="d-flex">
                                        <img src={person} alt="" />
                                        <h3>Charity Company Ltd</h3>
                                    </div>

                                </Col>
                                <Col sm={2}>
                                    <div className="text-center p-3">
                                        <Button className="button fw-bold w-50">
                                            Submit
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="registered-partner" title="Registered Partner">
                        <div className="card-history my-5">
                            <h5 className="fw-bold mx-3">April 20, 2020</h5>

                            <Table striped className="text-white text-center history-table mb-5">
                                <thead className="history-table text-dark">
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Amount</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white">
                                    <tr>
                                        <td >John</td>
                                        <td >Doe</td>
                                        <td >$10</td>
                                        <td >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ad?</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Tab>
                </Tabs>
            </Container>
        </Layout>
    );
}

export default AdminManagePartnershipPage;