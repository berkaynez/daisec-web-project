import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

const Home = lazy(() => import('@/pages/Home'));
const Features = lazy(() => import('@/pages/Features'));
const Solutions = lazy(() => import('@/pages/Solutions'));
const Gateways = lazy(() => import('@/pages/Gateways'));
const UseCases = lazy(() => import('@/pages/UseCases'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Docs = lazy(() => import('@/pages/Docs'));
const Support = lazy(() => import('@/pages/Support'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/features', element: <Features /> },
      { path: '/solutions', element: <Solutions /> },
      { path: '/gateways', element: <Gateways /> },
      { path: '/use-cases', element: <UseCases /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/docs', element: <Docs /> },
      { path: '/support', element: <Support /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);


