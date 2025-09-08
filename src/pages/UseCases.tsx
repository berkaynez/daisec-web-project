import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Use Cases</h1>
        <p className="text-muted-foreground mb-8">See how DaiSec helps real customers across industries.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="border rounded-xl p-6 bg-card shadow-card">
              <div className="font-semibold mb-2">Use Case {i}</div>
              <p className="text-sm text-muted-foreground">Short story of the problem and the outcome.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;


