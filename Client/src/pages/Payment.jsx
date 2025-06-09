import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const Payment = () => {
  const {cart }= useSelector((state) => state.cart);
  const {user}= useSelector((state) => state.auth)
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [cartTax, setCartTax] = useState(0.0);
  const [finalTotal, setFinalTotal] = useState(0.0);


  useEffect(() => {
    const calculateTax = () => {
      const tax = totalPrice * 0.09;
      const finalTotal = totalPrice + tax;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      setCartTax(formatter.format(tax));
      setFinalTotal(formatter.format(finalTotal));
    };
    calculateTax();
  }, [cart]);

  useEffect(() => {
    const calculateTax = () => {
      const tax = totalPrice * 0.09;
      const finalTotal = totalPrice + tax;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      setCartTax(formatter.format(tax));
      setFinalTotal(formatter.format(finalTotal));
    };
    calculateTax();
  }, [cart]);
  return (
<div className="m-5">
<div className="row">
  <div className="col-75">
    <div className="container">
      <form action="/action_page.php">

        <div className="row">
          <div className="col-50">
           
            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" value={user.firstName + " " + user.lastName} />
            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com" value={user.email}/>
            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York" />

            <div className="row">
              <div className="col-50">
                <label htmlFor="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY" />
              </div>
              <div className="col-50">
                <label htmlFor="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001" />
              </div>
            </div>
          </div>

          <div className="col-50">
            <label htmlFor="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />
            <label htmlFor="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
            <label htmlFor="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" />

            <div className="row">
              <div className="col-50">
                <label htmlFor="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018" />
              </div>
              <div className="col-50">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" />
              </div>
            </div>
          </div>

        </div>
        <input type="submit" value="Pay Now" className="btn" />
        
      </form>
    </div>
  </div>

  <div className="col-25">
    <div className="container">
      <h4 className="text-xl underline">Cart Details
        <span className="price" >
          <span className="text-sm"><b>Items in Cart: {cart.length}</b></span>
        </span>
      </h4>
      {cart.map((item, index) => (
        <div key={index}>
     <p>{item.productName}<span className="price">${item.price["$numberDecimal"]}</span></p>

 </div>
  ))}
      <hr />
      <p>Sub-Total <span className="price" ><b>${totalPrice}.00</b></span></p>
      <p>Tax <span className="price" ><b>{cartTax}</b></span></p>
      <p>Total <span className="price" ><b>{finalTotal}</b></span></p>
    </div>
  </div>
</div>
</div>

  )
}

export default Payment