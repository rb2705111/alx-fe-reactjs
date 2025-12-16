// src/components/RecipeDetail.jsx
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);
  const recipe = recipeData.find((r) => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Recipe not found</h2>
          <Link
            to="/"
            className="mt-4 text-blue-600 hover:underline inline-block"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 hover:underline font-medium"
        >
          ← Back to All Recipes
        </Link>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 mb-8 text-lg">{recipe.summary}</p>

            {/* Ingredients */}
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-orange-700 mb-3 flex items-center">
                🛒 Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section>
              <h2 className="text-xl font-semibold text-orange-700 mb-3 flex items-center">
                👩‍🍳 Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}