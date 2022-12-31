import { useState } from 'react';
import './App.css';
import { Gallery } from './Components/Gallery';
import { ImageUpload } from './Components/ImageUpload';

function App() {
  const [fileSubmitted, setFileSubmitted] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mainHeading'>Hello Foto!</h1>
      </header>
      <body>
        <Gallery fileSubmitted={fileSubmitted} setFileSubmitted={setFileSubmitted}/>
        <ImageUpload setFileSubmitted={setFileSubmitted}/>
      </body>
    </div>
  );
}

export default App;
