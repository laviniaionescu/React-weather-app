import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WeatherProvider } from './contexts/WeatherContext';
import Home from './pages/Home';
import City from './pages/City';
import './style.css';
import Page404 from './pages/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: '/city/:cityName',
    element: <City />,
    errorElement: <Page404 />,
  },
  {
    path: '*',
    element: <Page404 />,
  },
]);

export default function App() {
  return (
    <WeatherProvider>
      <RouterProvider router={router} />
    </WeatherProvider>
  );
}
