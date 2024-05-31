import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import Gigs from './components/gigs/Gigs';
import Tickets from './components/tickets/Tickets'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <div className="App container">
      <Header/>
      <Home/>
      <About/>
      <Gigs/>
      <Tickets/>
      <Contact/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
