import CartItem from "../Components/cartItem";
import { useSelector } from "react-redux";
export default function CartPage(){
  const cart = useSelector(state=> state.cart);
  const cartItems = cart.cartItems;
  
    return (
    <section className="h-100 gradient-custom">
     <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
                <div className="card mb-4">
                 <div className="card-header py-3">
            <h5 className="mb-0">Cart - {cartItems.length} items</h5>
          </div>
        <div className="card-body">
            {/* <!-- Single item --> */}
            {cartItems && cartItems.map(item=>{
              return(
                <CartItem 
                key={item.id}
                item = {item}
                />
              )
            })}  
        </div>
        </div>
        {/* <!-- Shipping Delivery  --> */}
        <div className="card mb-4">
          <div className="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p className="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        {/* <!-- Supported Cards  --> */}
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">
            <p><strong>We accept</strong></p>
            <img className="me-2 " width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
          </div>
        </div>
        {/* <!-- Checkout  --> */}
      </div>
      <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>$53.98</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p className="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>${cart.totalPrice}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}