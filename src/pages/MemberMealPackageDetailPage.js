import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { mealdetail } from "../assets";
import Layout from "../components/layout/Layout";

const MemberMealPackageDetailPage = () => {
  return (
    <Layout>
      <Container className="d-flex justify-content-center">
        <div className="card meals-detail my-5 align-items-center w-50">
          <div className="text-center py-4">
            <h2 className="text-white">Meal Package 1</h2>
          </div>
          <div className="w-50">
            <img src={mealdetail} alt="" className="w-100 rounded" />
            <div className="text-center my-3 text-white">
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
            <div className="text-center mt-5 mb-3">
              <Link to="/">
                <Button
                  variant="light"
                  className="bg-light fw-bold btn-register w-100"
                >
                  Request Meal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default MemberMealPackageDetailPage;
