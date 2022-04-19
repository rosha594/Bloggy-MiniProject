import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage'
import LogInPage from './Components/LogInPage';
import AboutUs from './Components/AboutUs'
import Blog from './Components/Blog'
import Following from './Components/Following'
import Profile from './Components/Profile'
import Create_Blog from './Components/Create_Blog'
import SignUp from './Components/SignUp';

function App() {
  return (
      <Router>
    <div className="App">
      <Routes>        
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element = {<LogInPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/aboutUs" element = {<AboutUs/>}/>        
          <Route path="/homePage" element={<HomePage/>} >
            <Route path='' element={<Blog/>}></Route>
            <Route path='following' element={<Following/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='create_blog' element={<Create_Blog/>}></Route>
          </Route>
      </Routes>
      {/* Landing Page */}

      {/* User Page */}
    </div>
      </Router>
  );
}

export default App;
