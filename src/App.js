import './App.css';
import { Gallery } from './Components/Gallery';
import { ImageUpload } from './Components/ImageUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gallery />
        <ImageUpload />
      </header>
    </div>
  );
}

export default App;
