import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlobalBubbles from "./components/GlobalBubbles";

function App() {
  return (
    <div className="page-wrapper">
      <GlobalBubbles />
      <Navbar />
      <Hero />
      <Services /> 
      <WhyChooseMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
