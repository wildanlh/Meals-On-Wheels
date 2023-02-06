import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { getMenuById } from "../api/api"
import { postMemberOrderCreateAPI } from "../api/member-api"
import { mealdetail } from "../assets"
import Layout from "../components/layout/Layout"
import AuthContext from "../context/auth-context"
import { menu_type } from "../context/context-type"

const MemberMealPackageDetailPage = () => {
  const { menuId } = useParams()
  const { token } = useContext(AuthContext)
  const [menu, setMenu] = useState(menu_type)
  const [msg, setMsg] = useState("")

  //Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    getMenuById(token, menuId)
      .then((resp) => setMenu(resp.data))
      .catch((err) => console.log(err))
  }, [menuId, token])

  //Submit Meal
  function handlePostOrder() {
    handleShow()
    postMemberOrderCreateAPI(token, menuId)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.warn(err))
  }

  return (
    <Layout>
      <Container className='d-flex justify-content-center'>
        <div className='card meals-detail my-5 align-items-center w-50'>
          <div className='text-center py-4'>
            <h2 className='text-white'>
              {menu.packageName}
              {menuId}
            </h2>
          </div>
          <div className='w-50'>
            <img src={menu.packageImage} alt='' className='w-100 rounded' />
            <div className='text-center my-3 text-white'>
              <p>
                Tender and juicy duck meat, crispy skin, and glazed with the
                honey-balsamic glaze. Stuffed with very savory and juicy garlic
                and lemon.{" "}
              </p>

              <p>
                {" "}
                Comes with fresh and healthy Greek Salad made of mixed greens,
                romaine and kale. Miso Soup with tofu and wakame seaweed. Fruit
                Tart with blueberries, peaches and kiwis. Lastly, a cup of Teh
                Poci.
              </p>
            </div>

            <div className='text-center mt-5 mb-3'>
              <Button
                variant='light'
                className='bg-light fw-bold btn-register w-100'
                onClick={handlePostOrder}
              >
                Request Meal
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Popup Request Msg */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='modal-popup'>
          <div className='text-center'>
            <Modal.Title className='text-white fw-bold'></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className='modal-popup'>
          <h2 className='text-white text-center'>
            {msg && <span>{msg}</span>}
          </h2>
        </Modal.Body>
        <div className='text-center modal-popup p-3'>
          <Button onClick={handleClose} className='button fw-bold w-50'>
            Back
          </Button>
        </div>
      </Modal>
    </Layout>
  )
}

export default MemberMealPackageDetailPage
