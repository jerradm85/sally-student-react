import React from 'react';
import './App.css';
import Education from './Education.js';
import Experience from './Experience.js';
import Powers from './Powers.js';
import Contact from './Contact.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Sally's Student Resume</h1>
    </header>
    <main>
      <Education />
      <Experience />
      <Powers />
      <Contact />
    </main>
    </div>
  );
}

export default App;
