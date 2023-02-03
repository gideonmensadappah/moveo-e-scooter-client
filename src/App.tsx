import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navigator from "./components/SideNav";
import ScootersScreen from "./screens/Scooters";
import ParkingsScreen from "./screens/Parkings";
import UsersScreen from "./screens/Users";

function App() {
  return (
    <Router>
      <div className='layout'>
        <Navigator />
        <MainContent />
      </div>
    </Router>
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
