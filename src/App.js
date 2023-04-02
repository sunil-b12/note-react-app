import './App.css';
import { Route, Routes } from 'react-router'
import Header from './components/Header';
import Home from './pages/Home';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='update' element={<Update />}/>
        </Routes>
    </div>
  );
}

export default App;
