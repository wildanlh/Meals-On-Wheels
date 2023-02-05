import { Container, Form, Table } from "react-bootstrap";
import Layout from "../components/layout/Layout";

import "./css/AdminDonationHistoryPage.css";

const AdminMealHistoryPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5 fw-bold">Meal History</h1>
        <Form.Select className="fw-bold mb-5">
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </Form.Select>

        <div className="card-history">
          <h5 className="fw-bold mx-3">April 20, 2020 (Display Date)</h5>

          <Table striped className="text-white text-center history-table mb-5">
            <thead className="history-table text-dark">
              <tr>
                <th>Name</th>
                <th>Package Name</th>
                <th>Order On</th>
                <th>Status</th>
                <th>Tambah aja kalau ada yang kurang</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr>
                <td>John</td>
                <td>Meal 1</td>
                <td>Jan 23, 2023</td>
                <td>Completed</td>
                <td>Tamabh aja klau ada yang kurang</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  );
};

export default AdminMealHistoryPage;
