import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Features";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import useReveal from "./hooks/useReveal";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <Products/>
      <Feature/>
      <CTA/>
      <Footer/>
      <WhatsAppButton />
    </>
  );
}

export default App;