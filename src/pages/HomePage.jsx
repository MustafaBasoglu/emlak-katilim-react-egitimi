import Products from "../components/Products/Products";

function HomePage({ setCartItem }) {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <Products setCartItem={setCartItem} />
    </div>
  );
}

export default HomePage;
