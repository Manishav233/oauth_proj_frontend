import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./pages/Login";
 import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
const user=true;
  return (
     <BrowserRouter>
      <div className="App">
        <Navbar user={user}/>
         <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/login'  element={user ? <Navigate to="/" /> : <Login />}></Route>
        <Route path='/movie/:id'  element={user ? <Movie/> :<Navigate to='/Login' />}></Route>  
        <Route path='/logout' element={ <Login/>}></Route> 
           {/* <Route path='/login'  element={ <Login />}></Route> */}
        {/* <Route path='/movie/:id'  element={ <Movie/>}></Route>    */}
    
        </Routes> 
    
      </div>
     </BrowserRouter>
  );
}

export default App;
