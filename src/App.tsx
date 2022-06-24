import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Users />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
