// src/components/Home.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Advanced Routing Demo</h1>

      {user ? (
        <div className="mb-4">
          <span className="mr-4">Hello, {user.username}!</span>
          <button
            onClick={logout}
            className="text-blue-600 hover:underline"
          >
            Logout
          </button>
        </div>
      ) : null}

      <div className="space-y-4">
        <div>
          <Link to="/post/1" className="text-blue-600 hover:underline">
            → View Blog Post #1 (dynamic route)
          </Link>
        </div>
        <div>
          <Link to="/post/42" className="text-blue-600 hover:underline">
            → View Blog Post #42 (dynamic route)
          </Link>
        </div>
        <div>
          <Link to="/profile" className="text-blue-600 hover:underline">
            → Go to Profile (protected)
          </Link>
        </div>
        {!user && (
          <div>
            <Link to="/login" className="text-blue-600 hover:underline">
              → Login first to access Profile
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}