import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <section
        style={{
          paddingTop: "80px",
        }}
      >
        <Outlet />
      </section>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
