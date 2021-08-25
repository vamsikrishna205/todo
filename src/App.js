import logo from './logo.svg';
import './App.css';
import Todoweb from './Components/Todo/Todo_Web';
import PersistentDrawerLeft from './Components/searchnav/side_navbar';
import PersistentDrawerLeft1 from './Components/searchnav/side_navbar_copy';


function App() {
  return (
    <div className="App1">
      <div className="App2">
        <PersistentDrawerLeft />
      </div>
      <div className="App3">
        <PersistentDrawerLeft1 />
      </div>

      <div><Todoweb /></div>
    </div>
  );
}

export default App;
