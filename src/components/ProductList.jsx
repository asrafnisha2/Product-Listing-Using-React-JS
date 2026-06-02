import ProductCard from "./ProductCard";

function ProductList({
  products,
  onAddToCart
}) {
  return (
    <div className="product-grid">

      {products.length === 0 ? (
        <h2>No products found</h2>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}

    </div>
  );
}

export default ProductList;

