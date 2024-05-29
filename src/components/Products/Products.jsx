import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import AddNewProduct from "./AddNewProduct";
import Modal from "../UI/Modal";
import "./Products.css";
import Spinner from "../UI/Spinner";
import useFetchData from "../../hooks/FetchData";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduts } from "../../redux/slices/productSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const { productData, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(loading);
  console.log(productData);
  function handleDeleteItem(productId) {
    const filteredProducts = products.filter((product) => {
      return product.id !== productId;
    });

    setProducts(filteredProducts);
  }

  // component ilk yüklendiğinde
  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchProduts());
    }
  }, [dispatch, loading]);

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
      {/* <Spinner isShowLoading={loading} className="my-3" /> */}
      <br />
      {error && <strong>Error loading data!</strong>}
      <div className="products">
        {productData.map((product) => {
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
