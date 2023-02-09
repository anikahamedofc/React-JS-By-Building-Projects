import "./App.css";
import Carousels from "./components/Carousels/Banner";
import Footer from "./components/Footer/footer";
import Gallary from "./components/Gallary/Gallary";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Carousels />
      <Services />
      <Gallary />
      <Footer />
    </div>
  );
};

export default App;
