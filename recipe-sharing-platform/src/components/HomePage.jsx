// src/components/HomePage.jsx
import { useState, useEffect } from 'react';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate async data load (optional, but good practice)
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-700 mb-10">
          🍲 Recipe Sharing Platform
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="block"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg text-gray-800 line-clamp-1">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {recipe.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}