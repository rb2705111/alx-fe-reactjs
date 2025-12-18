// src/components/ProfileLayout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function ProfileLayout() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <nav className="mb-6">
        <Link to="details" className="mr-4 text-blue-600 hover:underline">
          Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>
      <Outlet /> {/* This renders nested routes */}
    </div>
  );
}