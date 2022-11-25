import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video muted autoPlay loop>
            <source src="/video/galaxy.mp4" type="video/mp4" />
        </video>
        <div className="capa"></div>
        <Home />
      </header>
    </div>
  );
}

export default App;
