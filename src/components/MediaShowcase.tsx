import React, { useEffect } from 'react';

type Item = {
  src: string;
  alt: string;
  caption: string;
};

const items: Item[] = [
  {
    src: '/images/detection.jpg',
    alt: 'DaiSec person and package detection with red bounding boxes',
    caption: 'Instant person/package detection',
  },
  {
    src: '/images/available_objects_labeled.webp',
    alt: 'Multiple objects labeled on a legacy camera feed',
    caption: 'Works with legacy cams — multi-object labels',
  },
  {
    src: '/images/review.webp',
    alt: 'Event review user interface showing camera tiles and timeline',
    caption: 'Review events fast with visual timeline',
  },
];

export const MediaShowcase: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold">See it in Action</h2>
          <p className="text-muted-foreground mt-2">Real detections and review UI captured from DaiSec demos.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group text-left focus:outline-none"
              aria-label={`Open preview: ${item.caption}`}
            >
              <div className="overflow-hidden rounded-xl ring-1 ring-black/5 shadow-md bg-card">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{item.caption}</div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
        >
          <img
            src={items[openIndex].src}
            alt={items[openIndex].alt}
            className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default MediaShowcase;


