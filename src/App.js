import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Routerss from "./Components/Routerss/Routerss";
import Footer from "./Components/Footer/Footer";
import SaleOffer from "./Components/SaleOffer/SaleOffer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SaleOffer />
      <Routerss/>
      <Footer />
    </div>
  );
}

export default App;
