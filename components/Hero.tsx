
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Disponible para nuevos desafíos</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Escalando la <span className="text-blue-600">Calidad de Software</span> mediante Automatización Senior
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Soy <span className="font-semibold text-slate-900">Esteban Quintero Zuluaga</span>, Ingeniero de QA Automation con +5 años de experiencia liderando estrategias técnicas y arquitecturas sostenibles en frameworks como Serenity BDD y Screenplay.
            </p>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Medellín, Colombia</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">esteban41805@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">312 798 0551</span>
                </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl shadow-blue-100 border border-slate-100 rotate-2">
               <div className="bg-slate-900 rounded-xl overflow-hidden aspect-video relative">
                  {/* Code visual placeholder */}
                  <div className="absolute inset-0 p-6 font-mono text-sm text-blue-300 overflow-hidden leading-relaxed opacity-80">
                    <div className="flex space-x-2 mb-4 border-b border-slate-700 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p><span className="text-purple-400">@RunWith</span>(SerenityRunner.<span className="text-yellow-300">class</span>)</p>
                    <p><span className="text-blue-400">public class</span> WhenAutomatingQuality {'{'}</p>
                    <p className="pl-4"><span className="text-purple-400">@CastMember</span>(name = <span className="text-green-300">"Esteban"</span>)</p>
                    <p className="pl-4">Actor esteban;</p>
                    <br/>
                    <p className="pl-4"><span className="text-purple-400">@Test</span></p>
                    <p className="pl-4"><span className="text-blue-400">public void</span> should_optimize_delivery_cycles() {'{'}</p>
                    <p className="pl-8 text-slate-500">// 5 years of automation experience</p>
                    <p className="pl-8 text-slate-500">// 40+ projects automated</p>
                    <p className="pl-8">esteban.should(</p>
                    <p className="pl-12">seeThat(ReducedRegressionTime.isTrue()),</p>
                    <p className="pl-12">seeThat(HighImpactResults.areDelivered())</p>
                    <p className="pl-8">);</p>
                    <p className="pl-4">{'}'}</p>
                    <p>{'}'}</p>
                  </div>
               </div>
            </div>
            {/* Background decorative square */}
            <div className="absolute top-10 right-10 -z-0 w-full h-full bg-blue-600/10 rounded-2xl -rotate-2 border border-blue-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
