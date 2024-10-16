import "./App.css";
import SideBar from "./components/sideBar";
import { fileData } from "./constant";

function App() {
  return (
    <div>
      <SideBar data={fileData} />
    </div>
  );
}

export default App;
