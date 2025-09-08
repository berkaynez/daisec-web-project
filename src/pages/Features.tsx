import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-muted-foreground mb-8">Explore DaiSec's core capabilities designed to upgrade your existing cameras.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="border rounded-xl p-6 bg-card shadow-card">
              <div className="font-semibold mb-2">Feature {i}</div>
              <p className="text-sm text-muted-foreground">Short description of the feature and its value.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


