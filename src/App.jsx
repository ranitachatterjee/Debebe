
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import Section1 from './components/Section1'
import TabForm from './components/TabForm'
import Account from './components/Account'
import ForgotPassword from './components/ForgotPassword'
import Homepage from "./components/Homepage";
function App() {
 
  return (
<>
{/* <Section1/>
      <TabForm/> */}
      <Homepage/>
    {/* <Routes>
      
        <Route path="/" element={<Account />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
    <ToastContainer position="top-center" autoClose={2000} /> */}

</>
  )
}

export default App
