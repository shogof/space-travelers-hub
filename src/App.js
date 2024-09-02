// import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="myprofile" element={<Profile />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
