import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Talk to an Expert</h1>
        <p className="text-muted-foreground mb-8">Tell us about your setup and goals—our team will recommend the best path forward.</p>
        <div className="border rounded-xl p-6 bg-card shadow-card">
          <form className="grid gap-4">
            <input className="border rounded-md px-3 py-2" placeholder="Name" />
            <input className="border rounded-md px-3 py-2" placeholder="Email" />
            <textarea className="border rounded-md px-3 py-2" placeholder="How can we help?" rows={5} />
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold w-fit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


