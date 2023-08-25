import logo from './logo.svg';
import './App.css';
import AppInformation from './component/App-Information/AppInformation';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/platforms/:id' element={<AppInformation />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
