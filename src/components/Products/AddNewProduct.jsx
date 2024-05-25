import Button from "../UI/Button";
import "./AddNewProduct.css";

function AddNewProduct() {
  return (
    <form className="product-form">
      <div className="product-input">
        <label>Title</label>
        <input type="text" placeholder="Ürün ismi giriniz." />
      </div>
      <div className="product-input">
        <label>Image</label>
        <input type="text" placeholder="Ürün görseli giriniz." />
      </div>
      <div className="product-input">
        <label>Price</label>
        <input type="text" placeholder="Ürün fiyatı giriniz." />
      </div>
      <Button size="sm" type="primary">Yeni Ürün Ekle</Button>
    </form>
  );
}

export default AddNewProduct;
