import './index.css';
import {
  BrowserRouter,  
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Pages/Home/Home';
import { AboutUs } from './components/Pages/AboutUs/AboutUs';
import { Contact } from './components/Pages/Contact/Contac';
import { NotFound } from './components/Pages/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/prueba' element={<h1>Hola</h1>} />
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
