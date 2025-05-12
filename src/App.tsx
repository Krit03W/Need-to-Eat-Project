import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FoodProvider } from './context/FoodContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import History from './pages/History';
import TestNearby from './pages/TestNearby'; // ✅ import ไว้แล้วใช้เลย

function App() {
  return (
    <FoodProvider>
      <Router>
        <div className="min-h-screen bg-orange-50">
          <Navigation />
          <main className="pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/testnearby" element={<TestNearby />} /> {/* ✅ เพิ่มเส้นทางนี้ */}
            </Routes>
          </main>
        </div>
      </Router>
    </FoodProvider>
  );
}

export default App;


