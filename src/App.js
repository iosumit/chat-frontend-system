import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./modules/App/Pages/ChatPage/ChatPage";
import LoginPage from "./modules/App/Pages/LoginPage/LoginPage";
import Signup from "./modules/App/Pages/SignupPage/SignupPage";
import { Provider } from 'react-redux'
import store from './store'
import {ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/chat" element={<ChatPage />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    <ToastContainer/>
    </>
  );
}

export default App;
