import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Registration from './components/Registration.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
