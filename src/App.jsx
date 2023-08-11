import "../src/assets/components/styles/index.scss";
import About from "./components/molecules/About/About";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import OurCreations from "./components/organisms/OurCreations/OurCreations";

function App() {
  return (
    <>
      <Header />
      <About />
      <OurCreations />
      <Footer />
    </>
  );
}

export default App;
