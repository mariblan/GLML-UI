import './App.css'
import Layout from 'src/pages/Layout';
import Home from 'src/pages/Home';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

function App() {
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  );
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App
