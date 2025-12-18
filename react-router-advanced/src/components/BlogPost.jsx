// src/components/BlogPost.jsx
import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Blog Post #{id}</h1>
      <p className="mb-4">This is the content of blog post {id}.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}