import './App.css';
import Header from '../src/Compo/Header';
import Hero from './Compo/Hero';
import About from './Compo/About';
import Facts from './Compo/Facts';
import Skills from './Compo/Skills';
import Resume from './Compo/Resume';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <About/>
     <Facts/>
     <Skills/>
     <Resume/>
    </div>
  );
}

export default App;
