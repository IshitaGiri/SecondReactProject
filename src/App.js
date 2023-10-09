import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
// import Service from './Pages/Service';
// import Menu from './Pages/Menu';
import Navbar from './Components/Common/Navbar';
import About from './Pages/About';
import Post from './Pages/Post';
import Contact from './Pages/Contact';
import Footer from './Components/Common/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
