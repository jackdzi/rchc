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
      <div style={{ display: "flex", justifyContent: "center", padding: "3rem 0" }}>
        <a
          href="https://forms.gle/qrNsqq5CiUcQSAiNA"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(135deg, #003366 0%, #0066cc 100%)",
            color: "white",
            padding: "1.25rem 3rem",
            borderRadius: "50px",
            fontSize: "1.25rem",
            fontWeight: "600",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            textDecoration: "none",
            boxShadow: "0 8px 25px rgba(0, 51, 102, 0.3)",
            transition: "all 0.3s ease",
            letterSpacing: "0.5px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 51, 102, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 51, 102, 0.3)";
          }}
        >
          📧 Join Our ListServ
        </a>
      </div>
      <Calendar title="End of the gallery" />
      <Footer />
    </div>
  );
}

export default App;
