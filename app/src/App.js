import logo from './logo.svg';
import './App.css';

import Timer from './comp/Timer';
import TimerC from './comp/TimerC';

function App() {
  return (
    <div className="App">
        <header className="App-header">

        <Timer />    

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <TimerC/>
      </header>
    </div>
  );
}

export default App;
