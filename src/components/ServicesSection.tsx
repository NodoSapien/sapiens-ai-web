
import { Rocket, Brain, Settings, BarChart3, Code, Palette } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Análisis Inteligente",
      description: "Procesamiento y análisis de datos complejos mediante algoritmos de machine learning para generar insights accionables.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Sistemas Adaptativos",
      description: "Desarrollo de sistemas que aprenden y se adaptan automáticamente a las necesidades cambiantes del negocio.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Rocket,
      title: "Automatización Inteligente",
      description: "Implementación de procesos automatizados que optimizan la eficiencia operacional y reducen la carga manual.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Estrategia Digital",
      description: "Consultoría estratégica para la transformación digital y la integración efectiva de tecnologías emergentes.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Desarrollo de IA",
      description: "Creación de soluciones personalizadas de inteligencia artificial adaptadas a desafíos específicos.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Palette,
      title: "Innovación Creativa",
      description: "Fusión de creatividad y tecnología para desarrollar experiencias únicas e impactantes.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploramos, diseñamos y construimos soluciones que nacen del pensamiento humano 
            y se potencian con automatización, análisis inteligente y sistemas adaptativos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
