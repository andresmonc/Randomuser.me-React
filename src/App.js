import React, { useState } from 'react';
import './App.css';
import UserGenerator from './components/UserGenerator';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <UserGenerator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
