import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order")
  const { cartItems, emptyCart } = useContext(Context)
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ))

  const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  })

  function placeOrder() {
    setButtonText("Ordering...")
    setTimeout(() => {
      emptyCart()
      setButtonText("Place Order")
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}

      {cartItems.length > 0 && <p className="total-cost">Total: {totalCost}</p>}

      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p className="cart-page__no-items">You have no items in your cart.</p>
      )}
    </main>
  )
}

export default Cart
