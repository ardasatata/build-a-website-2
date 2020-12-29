import './App.css';
import img1 from './assets/img1.jpg';

function App() {
  return (
    <div className="App bg-blue-200 h-screen flex items-center justify-center">
      <header className="App-header">
        <div>
          <img src={img1} />
        </div>
        <a>Hello my name is Arda</a>
      </header>
    </div>
  );
}

export default App;
