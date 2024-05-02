import './App.css';
import './css/styles.css';
import './font/fonts.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Testimonials from './pages/testimonials';
import Resume from './pages/resume';


function App() { 
  return (
    
    <Router>
        <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/testimonials' element={<Testimonials />} />
              <Route path='/resume' element={<Resume />} />
              
            </Routes>
        </div>

    </Router>




  );
}

export default App;
