import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {
    console.log("run!");
  return (
    <div className="products">
      {productsData.map((product) => {
        return (
          <ProductItem
            key={product.id}
            img={product.image}
            title={product.title}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default Products;
