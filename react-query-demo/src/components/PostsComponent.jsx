// src/components/PostsComponent.jsx
import { useQuery } from '@tanstack/react-query';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default function PostsComponent() {
  const { data, isError, error, isLoading, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 10000,
  });

  if (isLoading) {
    return <div className="p-8 text-center">Loading posts...</div>;
  }

  if (isError) {
    return <div className="p-8 text-center text-red-600">Error: {error.message}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Posts from JSONPlaceholder</h1>
          <button
            onClick={() => refetch()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Refetch
          </button>
        </div>

        <div className="space-y-4">
          {data.slice(0, 10).map((post) => (
            <div key={post.id} className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}