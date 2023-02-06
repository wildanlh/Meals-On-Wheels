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
        <Form.Select className='fw-bold mb-5'>
          <option>2022</option>
          <option>gimana cara implemen ini?</option>
          <option>2020</option>
          <option>2019</option>
        </Form.Select>

        <div className='card-history'>
          <h5 className='fw-bold mx-3'>April 20, 2020 (Display Date)</h5>

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
                  <td>{Date(x.orderOn).slice(0, 10)}</td>
                  <td>{x.preparedBy?.name}</td>
                  <td>{x.deliveredBy?.name}</td>
                  <td>{x.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export default AdminMealHistoryPage
