import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './pages/components/Navbar'
import {Route, Routes} from "react-router-dom";



function App() {
  return (
   <>
    <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />

      </Routes>


   </>
  
  );
}

export default App;
