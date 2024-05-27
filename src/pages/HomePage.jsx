import Products from "../components/Products/Products";

import Counter from "../components/Counter";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <Counter />
      <Products />
    </div>
  );
}

export default HomePage;
