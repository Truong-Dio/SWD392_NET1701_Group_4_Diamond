import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import CartCus from "./pages/cartCus";
import CusProfile from "./pages/cusProfile";
import ProductTable from "./components/ProductTable";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<CartCus />} />
      <Route path="/myprofile" element={<CusProfile />} />
      <Route path="/diamond/round" element={<ProductTable />} />
      <Route path="/diamond/oval" element={<ProductTable />} />
      <Route path="/diamond/emerald" element={<ProductTable />} />
      <Route path="/diamond/cushion" element={<ProductTable />} />
      <Route path="/diamond/pear" element={<ProductTable />} />
      <Route path="/diamond/radiant" element={<ProductTable />} />
      <Route path="/diamond/princess" element={<ProductTable />} />
      <Route path="/diamond/marquise" element={<ProductTable />} />
      <Route path="/diamond/asscher" element={<ProductTable />} />
      <Route path="/diamond/heart" element={<ProductTable />} />





    </Routes>
  );
}
export default App;
