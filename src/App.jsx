import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services /> 
      <WhyChooseMe/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
