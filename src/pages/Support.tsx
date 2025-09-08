import React from 'react';

const Support: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Support</h1>
        <p className="text-muted-foreground mb-8">We're here to help. Browse FAQs or contact our support team.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="border rounded-xl p-6 bg-card shadow-card">
              <div className="font-semibold mb-2">Support Topic {i}</div>
              <p className="text-sm text-muted-foreground">Common issues and troubleshooting steps.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;


