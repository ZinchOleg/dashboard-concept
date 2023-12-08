import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout';
import { LoginView } from '../components/login';

export const Dashboard = lazy(() => import('../components/dashboard/Dashboard'));
export const Orders = lazy(() => import('../components/orders/Orders'));
export const Customers = lazy(() => import('../components/customers/Customers'));
export const Page404 = lazy(() => import('../components/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <AppLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </AppLayout>
      ),
      children: [
        { element: <Dashboard />, index: true },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'orders', element: <Orders /> },
        { path: 'customers', element: <Customers /> },
      ],
    },
    {
      path: 'login',
      element: <LoginView />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
