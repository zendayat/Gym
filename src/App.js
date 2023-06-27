import './App.css';
import Hero from '././components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Testimonials from './components/Testimonials/Testimonials';
import Perks from './components/perks/Perks';
import Plans from './components/Plans/Plans';
import Join from './components/Join/Join';
import Footer from './components/footer/Footer';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Testimonials/>
      <Perks/>
      <Plans/>
      <Join/>
      <Footer/>
      <Nav/>
    </div>
  );
}

export default App;
