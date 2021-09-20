import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import Layout from '../layouts/dashboard';
//
import DashboardApp from '../pages/HomePage/HomePage';
import ProductPage from '../pages/product/index'
import NotFound from '../pages/404/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { element: <Navigate to="/home" replace /> },
        { path: 'home', element: <DashboardApp /> },
        { path: 'product', element: <ProductPage /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
