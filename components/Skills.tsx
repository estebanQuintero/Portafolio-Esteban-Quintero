
import React from 'react';
import { TECHNICAL_SKILLS, SOFT_SKILLS } from '../constants';
import { Code2, Target, Heart } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Stack Técnico & Habilidades</h2>
          <p className="text-lg text-slate-600">Dominio de herramientas líderes para la automatización y calidad de software.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3 mb-6">
                <Code2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Tecnologías</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {TECHNICAL_SKILLS.map((category, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="bg-white border border-slate-200 px-3 py-1 rounded-lg text-sm text-slate-700 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
             <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
                <h3 className="text-2xl font-bold text-slate-900">Soft Skills</h3>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl shadow-blue-100">
                <div className="space-y-6">
                    {SOFT_SKILLS.map((skill, idx) => (
                        <div key={idx} className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                <Target className="w-5 h-5 text-blue-400" />
                            </div>
                            <span className="text-slate-200 font-medium">{skill}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800">
                    <p className="text-sm text-slate-400 italic">
                        "Enfoque en mentoring, liderando la formación de equipos técnicos y promoviendo una cultura de aprendizaje mutuo."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
