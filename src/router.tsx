import React from 'react';
import ScrollToTop from '@/components/ScrollToTop';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

import Home from '@/pages/Home';
import Features from '@/pages/Features';
import Solutions from '@/pages/Solutions';
import Gateways from '@/pages/Gateways';
import UseCases from '@/pages/UseCases';
import Pricing from '@/pages/Pricing';
import Docs from '@/pages/Docs';
import Support from '@/pages/Support';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <MainLayout />
      </>
    ),
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


