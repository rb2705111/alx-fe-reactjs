// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* ✅ Now matches "/blog/:id" */}
      </Routes>
    </Router>
  );
}

export default App;