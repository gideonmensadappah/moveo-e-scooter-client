import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import SideNav from "./components/SideNav";
import LoginScreen from "./screens/Login";
import AuthContextProvider from "./contexts/AuthContext";
import MainContent from "./components/MainContent/index";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <LoginScreen />
        <div className='layout'>
          <SideNav />
          <MainContent />
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
