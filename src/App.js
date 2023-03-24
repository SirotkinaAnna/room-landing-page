
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';
import SectionAbout from './components/SectionAbout';
import Navbar from './components/Navbar';
import './index.css'
function App() {
  return (
    <div className="App" id="app" role="main">
      <Navbar />
      <Carousel />
      <SectionAbout />
      <div role="note" id="footer">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://github.com/SirotkinaAnna">Anna Sirotkina</a>.
      </div>
    </div>
  );
}

export default App;
