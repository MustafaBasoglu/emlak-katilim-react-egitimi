import { useState } from "react";
import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import AddNewProduct from "./AddNewProduct";
import "./Products.css";
import Modal from "../UI/Modal";

function Products() {
  const [products, setProducts] = useState(productsData);

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((product) => {
      return product.id !== productId;
    });

    setProducts(filteredProducts);
  }

  return (
    <div className="products-wrapper">
      <AddNewProduct setProducts={setProducts} />
      <Modal title={"Modal Title"}>
        <strong>Modal Body</strong>
      </Modal>
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              {...product}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
