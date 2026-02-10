
import React from 'react';
import { Mail, Phone, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Educación & Formación</h2>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center flex-shrink-0 border border-blue-500/30">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-blue-400 text-sm font-medium">{edu.institution}</p>
                    <div className="flex items-center space-x-4 mt-1 text-slate-400 text-xs">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {edu.location}</span>
                        <span>{edu.year}</span>
                        {edu.status && <span className="bg-blue-600/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">{edu.status}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">¿Listo para mejorar tus procesos?</h2>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Estoy disponible para consultorías de QA, liderazgo técnico o posiciones senior que busquen escalar su calidad de software.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
                <a href="mailto:esteban41805@gmail.com" className="flex items-center space-x-4 bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 block uppercase tracking-wider font-bold">Email</span>
                        <span className="text-sm font-medium">esteban41805@gmail.com</span>
                    </div>
                </a>
                
                <a href="tel:+573127980551" className="flex items-center space-x-4 bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group">
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <span className="text-xs text-slate-500 block uppercase tracking-wider font-bold">Llamar</span>
                        <span className="text-sm font-medium">+57 312 798 0551</span>
                    </div>
                </a>
            </div>

            <div className="mt-12 flex items-center space-x-6">
                <span className="text-slate-500 font-medium">Idiomas:</span>
                <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-sm">
                    <span className="text-blue-400 font-bold">ES</span>
                    <span>Nativo</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-sm">
                    <span className="text-indigo-400 font-bold">EN</span>
                    <span>Nivel B1</span>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Esteban Quintero Zuluaga. Portafolio Senior QA Automation.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Medellín, CO</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Ingeniería de Software</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
