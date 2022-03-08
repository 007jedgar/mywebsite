import './App.css';
import Welcome from './components/welcome';
import Portfolio from './pages/portfolio';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from './components/layout';
import Header from './components/header'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route path="/" element={<Welcome />}/>
              <Route path="/portfolio" element={<Portfolio />}/>
            </Route>
              
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
