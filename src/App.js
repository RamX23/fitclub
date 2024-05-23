import './App.css';

import Hero from './components/Hero/Hero';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonial/Testimonial';
import Plans from './components/plans/Plans';
import Program from './components/programs/Program';
function App() {
  return (
    <div className="App">
   
          <Hero/>
          <Program/>
          <Reasons/>
          <Plans/>
          <Testimonial/>
    </div>
  );
}

export default App;
