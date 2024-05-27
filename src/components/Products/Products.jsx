import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import AddNewProduct from "./AddNewProduct";
import "./Products.css";

function Products() {
  return (
    <div className="products-wrapper">
      <AddNewProduct />
      <div className="products">
        {productsData.map((product) => {
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
