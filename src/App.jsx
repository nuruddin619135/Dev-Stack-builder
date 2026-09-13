import { toast, ToastContainer } from "react-toastify";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Technology from "./components/technologies/Technology";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Technology />
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
