import './App.css';
import Adminlogin from './components/Adminlogin'
import AdminDashboard from './components/AdminDashboard'
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin/>}/>
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
