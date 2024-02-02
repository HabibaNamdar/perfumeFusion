import Header from './components/header/Header'
import Headerfilter from './components/header-filter/Header-filter'
import Login from './components/login/login'
import Registor from './components/registor/Registor'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Headerfilter />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
