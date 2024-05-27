import { useState } from "react";
import ProductInput from "./ProductInput";
import Button from "../UI/Button";
import "./AddNewProduct.css";

const productInputs = [
  {
    label: "Title",
    type: "text",
    placeholder: "Ürün ismi giriniz.",
    name: "title",
  },
  {
    label: "Image",
    type: "text",
    placeholder: "Ürün görseli giriniz.",
    name: "image",
  },
  {
    label: "Description",
    type: "text",
    placeholder: "Ürün açıklaması giriniz.",
    name: "desc",
  },
  {
    label: "Price",
    type: "number",
    placeholder: "Ürün fiyatı giriniz.",
    name: "price",
  },
];

function AddNewProduct() {
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    desc: "",
    price: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(productData);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput key={index} {...input} handleChange={handleChange} />
      ))}

      <Button size="sm" type="primary">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

export default AddNewProduct;
