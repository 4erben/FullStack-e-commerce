import { useSelector } from "react-redux";
import SlideShow from "../Components/SlideShow";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function HomePage(){
  const products = useSelector(state => state.product.products); 
  const pending = useSelector(state => state.product.pending);
  const status = useSelector(state => state.product.status);
  let categoryArray;
  if(products){
     categoryArray = [...new Set(products.map(product=>{
    return product.category}))];
  }
  
    return (
        <Container  className="px-5">
          <Row>
          <Col lg={12} className="home-img p-5 my-3 rounded-5 d-flex flex-column">
            <h1 className="text-start fw-bold display-3 text-dark"> Welcome to Sizzle Shop</h1>
            <h3 className="text-start display-6 fw-semibold">Sale Up to 50%</h3>
            <p className="display-4">&nbsp;</p>
            <Link to="/shop" className=" btn btn-lg btn-warning ms-auto fw-semibold">Buy Now!</Link>
            </Col>
          <Col lg={12}>
            {
            !pending? 
              status?
              <>
                <Alert variant="danger" className="fw-bold">{status}</Alert>
                <Alert variant="info" className="fw-semibold" >Try Again after a minute</Alert>
              </>
            :
            <>
            {categoryArray&&categoryArray.map(c=>{
          return(
            <SlideShow category ={c}
            key={c}
            />
          )
             })}
            </>
            :
            <>
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Alert variant="info">loading your products</Alert>
            </>
            }
        
          </Col>
          </Row>
        </Container>
        
    )
}