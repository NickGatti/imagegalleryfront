import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form method="post" enctype="multipart/form-data" action="/upload">
          <input type="file" name="file" />
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
