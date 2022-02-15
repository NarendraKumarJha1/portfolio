import './App.css';
import Header from '../src/Compo/Header';
import Hero from './Compo/Hero';
import About from './Compo/About';
import Facts from './Compo/Facts';
import Skills from './Compo/Skills';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Facts/>
     <Skills/>
    </div>
  );
}

export default App;
