import { Button, Container, Form, Table } from "react-bootstrap"
import { useContext, useState, useEffect } from "react"
import {
  getMemberOrderAllAPI,
  postMemberOrderCompleteAPI,
} from "../api/member-api"
import Layout from "../components/layout/Layout"
import AuthContext from "../context/auth-context"
import { order_type } from "../context/context-type"

import "./css/AdminDonationHistoryPage.css"

const MemberOrderHistoryPage = () => {
  const { token } = useContext(AuthContext)
  const [order, setOrder] = useState([order_type])
  const [msg, setMsg] = useState("")

  function handleComplate(id) {
    postMemberOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMemberOrderAllAPI(token)
      .then((resp) => setOrder(resp.data.sort((a, b) => a.id - b.id)))
      .catch((err) => console.log(err))

    return () => {}
  }, [token])

  return (
    <Layout>
      <Container>
        <h1 className='text-center py-5 fw-bold'>Order History</h1>
        <Form.Select className='fw-bold mb-5'>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </Form.Select>

        <div className='card-history'>
          <h5 className='fw-bold mx-3'>April 20, 2020</h5>
          {msg}
          <Table striped className='text-white text-center history-table mb-5'>
            <thead className='history-table text-dark'>
              <tr>
                <th>No</th>
                <th>Meal Package</th>
                <th>Prepare by</th>
                <th>Order on</th>
                <th>Deliver to</th>
                <th>Deliver by</th>
                <th>Status</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody className='text-white'>
              {order.map((x, i) => (
                <tr key={x.id}>
                  <td>{i + 1}</td>

                  <td>{x.mealPackage.packageName}</td>
                  <td>{x.preparedBy?.name}</td>
                  <td>{Date(x.orderOn).slice(0, 10)}</td>
                  <td>{x.orderBy.address}</td>
                  <td>{x.deliveredBy?.name}</td>
                  <td>{x.orderStatus}</td>
                  <td>
                    {x.orderStatus === "DELIVERY_COMPLETE" ? (
                      <Button onClick={() => handleComplate(x.id)}>
                        Complate Order
                      </Button>
                    ) : (
                      <Button variant='light'>Driver di Kejar Anjing</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export default MemberOrderHistoryPage
