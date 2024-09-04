import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/Profile';
import './styles/App.css';
import Dragons from './components/Dragons';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <nav>
        <NavLink to="/dragons" activeClassName="active-link">Dragons</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myprofile" element={<MyProfile />} />
        {/* <Route path="*" element={<NotMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;c