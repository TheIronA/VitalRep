import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'; // Import the CSS file
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="generated-app-class-1 app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
