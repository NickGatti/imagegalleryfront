import { useState } from 'react';
import { Gallery } from './Components/Gallery';
import { ImageUpload } from './Components/ImageUpload';
import './App.css';

function App() {
  const [fileSubmitted, setFileSubmitted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mainHeading'>Hello Foto!</h1>
      </header>
      <div>
        <Gallery fileSubmitted={fileSubmitted} setFileSubmitted={setFileSubmitted} />
        <ImageUpload setFileSubmitted={setFileSubmitted} />
      </div>
    </div>
  );
};

export default App;
