import './App.css';
import './components/assets/css/style.css';
import Timer from './components/Timer.jsx'

function App() {
  return (
    <div className="App">
      <Timer time='5678' step='2' />
    </div>
  );
}

export default App;
