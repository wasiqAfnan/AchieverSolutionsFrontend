import './App.css';
import Adminlogin from './components/Adminlogin'
import AdminDashboard from './components/AdminDashboard'
import Userlist from './components/Userlist';
import Addcourses from './components/Addcourses';
import Courselist from './components/Courselist';
import { BrowserRouter,Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin/>}></Route>

          <Route path="/dashboard" element={<AdminDashboard/>}>
            <Route path = "userlist" element={<Userlist/>}/>
            <Route path = "addcourses" element={<Addcourses/>}/>
            <Route path = "courselist" element={<Courselist/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
