import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductsPage from './component/Productpage';
import Footer from './component/Footer';
import Allroutes from './component/Allroutes';
import MeeshoNavbar from './component/Navbar';


function App() {
  return (
    <>

<MeeshoNavbar />
<Allroutes />
<Footer />
    </>
    
      

      
     
  );
}

export default App;
