import './App.css';
import { NavBar } from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      
    </div>
  );
}

export default App;
