import './App.css';
import Header from '../src/Compo/Header';
import Hero from './Compo/Hero';
import About from './Compo/About';
import Facts from './Compo/Facts';
import Skills from './Compo/Skills';
import Resume from './Compo/Resume';
import Portfolio from './Compo/Portfolio';
import Services from './Compo/Services';
import Portfoliodetails from './Compo/Portfoliodetails';
import Footer from './Compo/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Facts/>
     <Skills/>
     <Resume/>
     <Portfolio/>
     <Portfoliodetails/>
     <Services/>
      <Footer/>
    </div>
  );
}

export default App;
