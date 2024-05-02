
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home }from './components/Home';
import {Blogs} from './components/Blogs';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
                <Route path="/blogs" element={<Blogs />} />            
            </Routes>
      </Router>
  </div>
);
}
export default App;
