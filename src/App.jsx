import './App.css';
import Header from './Component/Header/Header';
import Nav from './Component/Nav/Nav';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import Footer from './Component/Footer/Footer';
import Portfolio from './Component/Portfolio/Portfolio';
import Services from './Component/Services/Services';
import Testimonial from './Component/Testimonial/Testimonial';
import About from './Component/About/About';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
