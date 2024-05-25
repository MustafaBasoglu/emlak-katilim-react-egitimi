import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {

  return (
    <div className="products">
      <ProductItem
        img={productsData[0].image}
        title={productsData[0].title}
        price={productsData[0].price}
      />
      <ProductItem
        img={productsData[1].image}
        title={productsData[1].title}
        price={productsData[1].price}
      />
      <ProductItem
        img={productsData[2].image}
        title={productsData[2].title}
        price={productsData[2].price}
      />
      <ProductItem
        img={productsData[3].image}
        title={productsData[3].title}
        price={productsData[3].price}
      />
    </div>
  );
}

export default Products;
