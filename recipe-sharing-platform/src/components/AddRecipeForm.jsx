// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    const ingredientsList = ingredients
      .split('\n')
      .map((ing) => ing.trim())
      .filter(Boolean);
    if (ingredientsList.length < 2) {
      newErrors.ingredients = 'Please list at least 2 ingredients (one per line)';
    }

    const instructionsList = instructions
      .split('\n')
      .map((step) => step.trim())
      .filter(Boolean);
    if (instructionsList.length < 1) {
      newErrors.instructions = 'At least one preparation step is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you'd POST to an API
      // For now, just show success and go back
      alert('✅ Recipe submitted successfully!');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-orange-700 mb-8">
          Add a New Recipe
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 md:p-8"
        >
          {/* Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Recipe Title *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., Creamy Mushroom Pasta"
            />
            {errors.title && <p className="mt-1 text-red-600 text-sm">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
              Ingredients * <span className="text-gray-500 text-sm">(one per line)</span>
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="5"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                errors.ingredients ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="200g pasta&#10;100g mushrooms&#10;2 cloves garlic..."
            />
            {errors.ingredients && (
              <p className="mt-1 text-red-600 text-sm">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
              Preparation Steps * <span className="text-gray-500 text-sm">(one per line)</span>
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="6"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none ${
                errors.instructions ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="1. Boil water&#10;2. Cook pasta&#10;3. Sauté mushrooms..."
            />
            {errors.instructions && (
              <p className="mt-1 text-red-600 text-sm">{errors.instructions}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 w-full md:w-auto"
            >
              Submit Recipe
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline"
          >
            ← Back to Recipes
          </button>
        </div>
      </div>
    </div>
  );
}