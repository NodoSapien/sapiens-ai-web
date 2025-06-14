
import { Target, Users, Lightbulb, Cpu } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Creatividad Aplicada",
      description: "Cada proyecto es una expresión única de creatividad, donde las ideas humanas se potencian con tecnología avanzada."
    },
    {
      icon: Cpu,
      title: "IA como Aliada",
      description: "Utilizamos la inteligencia artificial como herramienta estratégica para amplificar el potencial creativo humano."
    },
    {
      icon: Target,
      title: "Soluciones Adaptativas",
      description: "Desarrollamos sistemas inteligentes que se adaptan y evolucionan con las necesidades específicas de cada proyecto."
    },
    {
      icon: Users,
      title: "Pensamiento Colaborativo",
      description: "Fomentamos la colaboración entre mentes humanas y sistemas inteligentes para crear soluciones innovadoras."
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">NodoSapiens</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos pioneros en la convergencia entre creatividad humana e inteligencia artificial. 
            Nuestra misión es transformar ideas visionarias en realidades tangibles mediante la aplicación 
            estratégica de tecnologías emergentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 hover:from-blue-50 hover:to-violet-50 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-100 hover:border-blue-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Nuestra Filosofía</h3>
          <p className="text-blue-100 text-lg max-w-4xl mx-auto leading-relaxed">
            En NodoSapiens, creemos que el futuro se construye en la intersección entre la intuición humana 
            y la precisión de la inteligencia artificial. Cada nodo representa una conexión, cada sapiens 
            una mente creativa, y juntos formamos una red de innovación que trasciende las limitaciones tradicionales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
