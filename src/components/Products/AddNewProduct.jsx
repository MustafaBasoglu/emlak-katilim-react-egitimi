import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
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

const initialValues = {
  title: "",
  image: "",
  desc: "",
  price: "",
};

function AddNewProduct({ setProducts, setIsShowModal }) {
  const [productData, setProductData] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = Object.values(productData).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      // setIsShowModal(true);
      toast.error("Inputlar boş geçilemez!", {
        autoClose: 1500,
      });
      return;
    }

    const { desc, ...rest } = productData;

    const newProduct = {
      ...rest,
      id: Math.random(),
      description: desc,
      price: Number(productData.price),
    };

    setProducts((prevState) => [newProduct, ...prevState]);

    setProductData(initialValues);
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      {productInputs.map((input, index) => (
        <ProductInput
          key={index}
          {...input}
          handleChange={handleChange}
          value={productData[input.name]}
        />
      ))}

      <Button size="sm" type="primary">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

AddNewProduct.propTypes = {
  setProducts: PropTypes.func,
  setIsShowModal: PropTypes.func,
};

export default AddNewProduct;
