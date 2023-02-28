import './App.css';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import { Routes, Route,useLocation } from 'react-router-dom';
import CardDetail from './components/CardDetail/CardDetail';
import Form from './components/Form/Form';
import NavBar from "./components/NavBar/NavBar";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/'? <Landing/> : <NavBar />}
      <Routes>
        <Route exact path ='/home' element={<Home/>} />
        <Route exact path = '/detail/:id' element={<CardDetail />} />
        <Route exact path='/form' element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
