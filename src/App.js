import "./App.css";
import HorizontalScroll from "./Components/HorizontalScroll/HorizontalScroll";
import Hero from "./Components/Hero/Hero";
import Calendar from "./Components/Calendar/Calendar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero title="Light rail photography" />
      <HorizontalScroll />
      <Calendar title="End of the gallery" />
      <Footer />
    </div>
  );
}

export default App;
