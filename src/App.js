import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import { GlobalStyle } from "./style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import { useDataContext } from "./context/ContextProvider";
import Loading from "../src/Helper/Loading";

const App = () => {
  const { isLoading } = useDataContext();

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",

      bg: "#F6F8FA",
      border: "rgba(98, 84, 243, 0.5)",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },

    media: {
      tab: "998px",
      mobile: "768px",
      small_devices: "280px"
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        ``
        <GlobalStyle />
        <div style={{ opacity: isLoading ? 0.5 : 1 }}>
          {isLoading && <Loading />}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
