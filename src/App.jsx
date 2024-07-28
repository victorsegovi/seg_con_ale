import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Reseñas from "./components/Reseñas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Reseñas></Reseñas>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
