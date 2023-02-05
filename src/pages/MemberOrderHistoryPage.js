import { Container, Form, Table } from "react-bootstrap";
import Layout from "../components/layout/Layout";

import "./css/AdminDonationHistoryPage.css";

const MemberOrderHistoryPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5 fw-bold">Order History</h1>
        <Form.Select className="fw-bold mb-5">
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </Form.Select>

        <div className="card-history">
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
                <td>John</td>
                <td>Doe</td>
                <td>$10</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt, ad?
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  );
};

export default MemberOrderHistoryPage;
