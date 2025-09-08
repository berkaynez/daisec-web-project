import React from 'react';

const UIBand: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Review events in seconds</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                <span>Smart filters: human, vehicle, package, animal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                <span>Instant notifications with thumbnails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-600" />
                <span>Secure cloud or local gateway storage</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="rounded-xl ring-1 ring-black/5 shadow-xl overflow-hidden">
              <img
                src="/images/review.webp"
                alt="DaiSec review interface with multiple camera tiles"
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIBand;


