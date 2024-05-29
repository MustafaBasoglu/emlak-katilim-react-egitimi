import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import "./Products.css";
import Spinner from "../UI/Spinner";
import useFetchData from "../../hooks/FetchData";

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const { data, isLoading, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((product) => {
      return product.id !== productId;
    });

    setProducts(filteredProducts);
  }

  // component ilk yüklendiğinde
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div className="products-wrapper">
      <AddNewProduct
        setProducts={setProducts}
        setIsShowModal={setIsShowModal}
      />
      {isShowModal && (
        <Modal title={"Form Kontrolü"} setIsShowModal={setIsShowModal}>
          <strong className="text-danger">Tüm inputları doldurunuz!</strong>
        </Modal>
      )}
      <br />
      <Spinner isShowLoading={isLoading} className="my-3" />
      <br />
      {error && <strong>Error loading data!</strong>}
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
