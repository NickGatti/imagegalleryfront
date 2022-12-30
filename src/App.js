import './App.css';
import { Gallery } from './Components/Gallery';
import { ImageUpload } from './Components/ImageUpload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Foto!</h1>
      </header>
      <body>
        <Gallery />
        <ImageUpload />
      </body>
    </div>
  );
}

export default App;
