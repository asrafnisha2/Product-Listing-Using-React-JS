function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Cart Items</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              <button
                onClick={() =>
                  removeFromCart(index)
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;

