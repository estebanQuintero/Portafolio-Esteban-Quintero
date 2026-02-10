
import React from 'react';
// Added missing import for CheckCircle icon
import { CheckCircle } from 'lucide-react';
import { WORKFLOW_STEPS } from '../constants';

const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent opacity-5"></div>
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Ciclo de Vida de Automatización</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Un flujo de trabajo riguroso y visual que garantiza la integridad de cada despliegue a través de la metodología Screenplay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {WORKFLOW_STEPS.map((step, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-black/20"
            >
              {/* Visual "Image" Mockup Area */}
              <div className="h-40 bg-slate-950/50 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
                
                {/* Visual representation based on step */}
                <div className="relative z-10 p-4 transform group-hover:scale-110 transition-transform duration-500">
                   <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 shadow-inner">
                      {React.cloneElement(step.icon as React.ReactElement, { className: "w-12 h-12 text-blue-400" })}
                   </div>
                </div>

                {/* Decorative coding bits for background */}
                <div className="absolute bottom-2 left-4 text-[10px] font-mono text-slate-600 select-none">
                   {index % 2 === 0 ? "exec: mvn verify" : "git push origin feature/"}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow relative">
                {/* Step Number Badge */}
                <div className="absolute -top-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl border-4 border-slate-900 group-hover:bg-blue-500 transition-colors">
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold text-white mb-3 pr-8 leading-tight group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>
                
                <div className="mt-auto pt-4 flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                   <span>Estatus: Optimizado</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Final Results Card */}
          <div className="group flex flex-col h-full bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl overflow-hidden items-center justify-center p-8 text-center space-y-4">
             <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                <CheckCircle className="w-8 h-8 text-white" />
             </div>
             <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Calidad Certificada</h3>
                <p className="text-blue-100/70 text-sm italic">"Software listo para producción con 0 defectos críticos."</p>
             </div>
             <div className="w-full h-1 bg-blue-500/30 rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-400 animate-[loading_2s_ease-in-out_infinite]"></div>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Workflow;
