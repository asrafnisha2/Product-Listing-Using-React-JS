function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>Product Listing App</h2>
      <h3>Cart: {cartCount}</h3>
    </nav>
  );
}

export default Navbar;
