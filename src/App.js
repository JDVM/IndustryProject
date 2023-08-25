import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./App.scss";
  import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />


        <Routes>
          <Route path='/' element={<Navigate to="/dashboard"/>}/> 

          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
