import { useContext, useEffect, useState } from "react"
import { Container, Form, Table } from "react-bootstrap"
import { getAdminOrderAllAPI } from "../api/admin-api"
import Layout from "../components/layout/Layout"
import AuthContext from "../context/auth-context"
import { order_type } from "../context/context-type"

import "./css/AdminDonationHistoryPage.css"

const AdminMealHistoryPage = () => {
  const { token } = useContext(AuthContext)
  const [order, setOrder] = useState([order_type])

  useEffect(() => {
    getAdminOrderAllAPI(token)
      .then((resp) => setOrder(resp.data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.log(err))

    return () => {}
  }, [token])

  return (
    <Layout>
      <Container>
        <h1 className='text-center py-5 fw-bold'>Meal History</h1>

        <div className='card-history'>

          <Table striped className='text-white text-center history-table mb-5'>
            <thead className='history-table text-dark'>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Package Name</th>
                <th>Deliver to</th>
                <th>Order On</th>
                <th>Prepare by</th>
                <th>Deliver by</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className='text-dark'>
              {order.map((x, i) => (
                <tr key={x.id}>
                  <td>{i + 1}</td>
                  <td>{x.orderBy.name}</td>
                  <td>{x.mealPackage.packageName}</td>
                  <td>{x.orderBy.address}</td>
                  <td>{new Date(x.orderOn).toLocaleString('en-GB', { timeZone: 'Asia/Singapore',hour12:true })}</td>
                  <td>{x.preparedBy?.name}</td>
                  <td>{x.deliveredBy?.name}</td>
                  <td>{x.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
      <div
        className="half-circle"
        style={{ bottom: "200px", right: "-50px" }}
      ></div>
      <div
        className="circle-yellow-lg"
        style={{ bottom: "400px", left: "-100px" }}
      ></div>
    </Layout>
  )
}

export default AdminMealHistoryPage
