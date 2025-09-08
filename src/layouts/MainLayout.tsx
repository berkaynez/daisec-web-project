import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;


