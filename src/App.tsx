import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import UsersList from './components/UsersList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< UsersList />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
