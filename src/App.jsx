import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Navbar,
  Tech,
  Works,
  Hero,
  StarsCanvas,
} from './components';
import Education from './components/Education';

const App = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  console.log('here');
  console.log(`publicKey: ${publicKey}`);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Education />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
