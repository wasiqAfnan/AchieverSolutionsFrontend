import './App.css';
import Adminlogin from './components/Adminlogin'
import AdminDashboard from './components/AdminDashboard'
import Protected from './components/protected';
import Dashboard from './components/dashboard';
import Userlist from './components/Userlist';
import Addcourses from './components/Addcourses';
import Courselist from './components/Courselist';
import NoticeList from './components/NoticeList';
import AddNotices from './components/AddNotice';
import Reviews from './components/Reviews';
import Downloads from './components/Downloads';
import { BrowserRouter,Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Adminlogin/>}></Route>

          <Route path="/dashboard/*" element={<Protected Cmp={Dashboard}>
              <Dashboard />
            </Protected>}>

              <Route path = "admindashboard" element={<AdminDashboard/>}/>
              <Route path = "userlist" element={<Userlist/>}/>
              <Route path = "addcourses" element={<Addcourses/>}/>
              <Route path = "courselist" element={<Courselist/>}/>
              <Route path = "noticelist" element={<NoticeList/>}/>
              <Route path = "addnotices" element={<AddNotices/>}/>
              <Route path = "reviews" element={<Reviews/>}/>
              <Route path = "downloads" element={<Downloads/>}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
