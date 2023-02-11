import { Button, Container, Form, Table } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import {
  getMemberOrderAllAPI,
  postMemberOrderCompleteAPI,
} from "../api/member-api";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import { order_type } from "../context/context-type";

import "./css/AdminDonationHistoryPage.css";

const MemberOrderHistoryPage = () => {
  const { token } = useContext(AuthContext);
  const [order, setOrder] = useState([order_type]);
  const [msg, setMsg] = useState("");

  function handleComplate(id) {
    postMemberOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMemberOrderAllAPI(token)
      .then((resp) => setOrder(resp.data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.log(err));

    return () => {};
  }, [token]);

  return (
    <Layout>
      <Container>
        <h1 className="text-center py-5 fw-bold">Order History</h1>

        <div className="card-history">
          {msg}
          <Table striped className="text-white text-center history-table mb-5">
            <thead className="history-table text-dark">
              <tr>
                <th>No</th>
                <th>Meal Package</th>
                <th>Prepared by</th>
                <th>Ordered on</th>
                <th>Delivery Address</th>
                <th>Deliver by</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="text-dark">
              {order.map((x, i) => (
                <tr key={x.id}>
                  <td>{i + 1}</td>
                  <td>{x.mealPackage.packageName}</td>
                  <td>{x.preparedBy?.name}</td>
                  <td>
                    {new Date(x.orderOn).toLocaleString("en-GB", {
                      timeZone: "Asia/Singapore",
                      hour12: true,
                    })}
                  </td>
                  <td>{x.orderBy.address}</td>
                  <td>{x.deliveredBy?.name}</td>
                  <td>{x.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  );
};

export default MemberOrderHistoryPage;
