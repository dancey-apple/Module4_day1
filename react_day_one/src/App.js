import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Body />
      </header>
    </div>
  );
}

export default App;
