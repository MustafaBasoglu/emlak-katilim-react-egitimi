import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  const img = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const title = "Şapka";
  const price = 500;

  return (
    <div className="products">
      <ProductItem
        myName="Emin Başbayan"
        img={img}
        title={title}
        price={price}
      />
    </div>
  );
}

export default Products;
