import { Route, Routes } from "react-router-dom";
import ScootersScreen from "../../screens/Scooters";
import ParkingsScreen from "../../screens/Parkings";
import UsersScreen from "../../screens/Users";
import MainScreen from "../../screens/Welcome/index";
import NotFoundScreen from "../../screens/NotFound";

const MainContent = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/users' element={<UsersScreen />} />
        <Route path='/parkings' element={<ParkingsScreen />} />
        <Route path='/scooters' element={<ScootersScreen />} />
        <Route path='/' element={<MainScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
};

export default MainContent;
