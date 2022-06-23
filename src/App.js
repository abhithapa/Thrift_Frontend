
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Cart from './components/cart';
import Sdata from './components/MainPage/Sdata';
import Body from './components/Body';
function App() {

  const { shopItems } = Sdata


  return (
    
    <div >
      
      <Router>
 
  
        
   <Header></Header>
   {/* <Aboutus></Aboutus> */}
    <Body></Body>
      </Router>
      <Footer></Footer> 
  
    </div>
  );
}

export default App;
