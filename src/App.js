import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/Profile';
import './styles/App.css';
import Dragon from './components/Dragon';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragon" element={<Dragon />} />
        <Route path="/myprofile" element={<MyProfile />} />
        {/* <Route path="*" element={<NotMatch />} /> */}
      </Routes>
    </div>
  );
}

export default App;
