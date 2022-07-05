import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import UsersComponent from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/react-js-ts-rating-system' element={< UsersComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
