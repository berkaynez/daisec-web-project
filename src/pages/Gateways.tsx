import React from 'react';

const Gateways: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Gateways</h1>
        <p className="text-muted-foreground mb-8">Upgrade legacy cameras with DaiSec gateways for AI detection and cloud access.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="border rounded-xl p-6 bg-card shadow-card">
              <div className="font-semibold mb-2">Gateway Model {i}</div>
              <p className="text-sm text-muted-foreground">Specs and key advantages for this gateway model.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gateways;


