import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './pages/Signin';
import Signup from './pages/signup';
import Profile from './pages/Profile';
import Analytics from './pages/Analytics';
import Edit_profile from './Components/Edit_profile'
import Myshope from "./pages/Myshope"
import Order_history from "./pages/Order_history"
import Settings from "./pages/Settings"
import Wallet from "./pages/Wallet"
function App() {
  return (
    <>
       <BrowserRouter>
    <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Signin" element={<Signin/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Analytics" element={<Analytics/>}/>
        <Route path="/Edit_profile" element={<Edit_profile/>}/>
        <Route path="/Order_history" element={<Order_history/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Wallet" element={<Wallet/>}/>
        <Route path="/Myshope" element={<Myshope/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;