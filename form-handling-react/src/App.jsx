// src/App.jsx
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm.js';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <RegistrationForm />
      <div className="my-8 border-t pt-8"></div>
      <FormikForm />
    </div>
  );
}

export default App;