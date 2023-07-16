import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './components/Error';
import Home from './components/Home';
import Data from './components/Data';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path='*' element={<Error />}/>
        <Route path="/" element={<Home/>}/>
        <Route path='/data' element={<Data/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
