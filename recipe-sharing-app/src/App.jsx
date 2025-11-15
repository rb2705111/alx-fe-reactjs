import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing App</h1>
        <p>Share and discover amazing recipes</p>
      </header>
      
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Recipe Sharing App</h1>
            <p className="text-gray-600">Share and discover amazing recipes</p>
          </header>
          
          <Routes>
            <Route path="/" element={
              <>
                <RecipeList />
                <AddRecipeForm />
              </>
            } />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>
        
        <Routes>
          <Route path="/" element={
            <>
              <RecipeList />
              <AddRecipeForm />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Recipe Sharing App</h1>
        
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <RecipeList />
              <AddRecipeForm />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Recipe Sharing App</h1>
        <p>Share and discover amazing recipes</p>
      </header>
      
      {/* Main recipe list with favorite buttons */}
      <RecipeList />
      
      {/* Form to add new recipes */}
      <AddRecipeForm />
      
      {/* User's favorite recipes */}
      <FavoritesList />
      
      {/* Personalized recommendations */}
      <RecommendationsList />
    </div>
  );
}

export default App;
```

## 📁 Complete File Structure:
```
recipe-sharing-app/
├── src/
│   ├── components/
│   │   ├── recipeStore.js           ← Updated with favorites & recommendations
│   │   ├── RecipeList.jsx           ← Updated with favorite toggle
│   │   ├── AddRecipeForm.jsx
│   │   ├── FavoritesList.jsx        ← NEW
│   │   └── RecommendationsList.jsx  ← NEW
│   ├── App.jsx                      ← Updated with new components
│   └── main.jsx
├── package.json
└── vite.config.js