import { useState } from "react";
import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import AddNewProduct from "./AddNewProduct";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="products-wrapper">
      <AddNewProduct setProducts={setProducts} />
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
              desc={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
