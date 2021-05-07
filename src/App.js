import './App.css';
import './components/assets/css/style.css';
import Timer from './components/Timer.jsx'

function App() {
  return (
    <div className="App">
      <Timer time='5' step='1' autostart={false} onTick={(time) => console.log("Залишилось часу: " + time)} />
      <Timer time='5876' step='2' autostart={true} onTick={(time) => console.log("Залишилось часу: " + time)}/>
    </div>
  );
}

export default App;
