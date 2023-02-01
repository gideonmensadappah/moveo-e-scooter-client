import "./App.css";
import Navigator from "./components/SideNav";

function App() {
  return (
    <div className='layout'>
      <Navigator />
      <MainContent />
    </div>
  );
}

export default App;

const MainContent = () => {
  return <div className='main'></div>;
};
