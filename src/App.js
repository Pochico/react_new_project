import './App.css';

import Home from'./screen/home'
import Navbar from'./components/navbar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Home />
    </div>
  );
}

export default App;
