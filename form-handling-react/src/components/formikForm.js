// src/components/formikForm.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function FormikForm() {
  const handleSubmit = (values) => {
    // Mock API call
    console.log('Submitting user:', values);
    alert('User registered successfully (Formik)!');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-3">
            <label className="block mb-1">Username</label>
            <Field
              name="username"
              type="text"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-3">
            <label className="block mb-1">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Register with Formik
          </button>
        </Form>
      </Formik>
    </div>
  );
}