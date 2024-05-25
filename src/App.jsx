import Button from "./components/UI/Button";
// import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <Button type="danger" size="sm">
        Delete
      </Button>
      <br />
      <br />
      <Button type="success" size="sm">
        <strong>Add To Cart</strong>
      </Button>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
