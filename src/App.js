// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Layout/Footer";
import MyKeep from "./components/MyKeep";

function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center ">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <>
                  {/* <Header/> */}
                  <MyKeep/>
                  <Footer/>
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
