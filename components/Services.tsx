
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">¿Cómo puedo aportar a tu empresa?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Desde la estrategia inicial hasta el despliegue continuo, optimizo el ciclo de vida del desarrollo a través de la calidad técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className="bg-white p-3 rounded-lg w-fit shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 italic">"Mi enfoque no es solo automatizar, es crear arquitecturas sostenibles que permitan al negocio moverse más rápido con confianza."</h3>
                <p className="text-blue-100 opacity-90">Expertise destacado en escalabilidad de procesos desde cero.</p>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-5xl font-bold mb-1">40+</span>
                <span className="text-blue-100 uppercase tracking-widest text-xs font-semibold">Proyectos Automatizados</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
