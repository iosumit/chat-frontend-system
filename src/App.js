import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./modules/App/Pages/HomePage/HomePage";
import ChatPage from "./modules/App/Pages/ChatPage/ChatPage";
import LoginPage from "./modules/App/Pages/LoginPage/LoginPage";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/chat" element={<ChatPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
