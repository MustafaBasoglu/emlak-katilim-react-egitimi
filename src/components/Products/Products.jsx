import { useState } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((product) => {
      return product.id !== productId;
    });

    setProducts(filteredProducts);
  }

  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();

      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("İşlem tamamlandı!");
    }
  }

  return (
    <div className="products-wrapper">
      <AddNewProduct
        setProducts={setProducts}
        setIsShowModal={setIsShowModal}
      />
      <Modal
        title={"Form Kontrolü"}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      >
        <strong className="text-danger">Tüm inputları doldurunuz!</strong>
      </Modal>
      <Button size="lg" type="success" onClick={fetchProducts} className="mb-3">
        Fetch Products
      </Button>
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
