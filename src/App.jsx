import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Works, Navbar, Skills } from "./components";
import Whatsapp from "./components/Whatsapp/Whatsapp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Experience />
        <Works />
        <Contact />
      </div>
      <Whatsapp />
    </BrowserRouter>
  );
};

export default App;
