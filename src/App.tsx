import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import SideNav from "./components/SideNav";
import ScootersScreen from "./screens/Scooters";
import ParkingsScreen from "./screens/Parkings";
import UsersScreen from "./screens/Users";
import LoginScreen from "./screens/Login";
import AuthContextProvider from "./contexts/AuthContext";

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

const MainContent = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/users' element={<UsersScreen />} />
        <Route path='/parkings' element={<ParkingsScreen />} />
        <Route path='/scooters' element={<ScootersScreen />} />
      </Routes>
    </div>
  );
};
