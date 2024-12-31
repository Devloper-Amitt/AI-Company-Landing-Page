import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;