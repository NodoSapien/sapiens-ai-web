
import { Github, ExternalLink, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conecta con <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes una idea que quieres transformar en realidad? Únete a nuestra comunidad en GitHub 
            y descubre cómo la inteligencia artificial puede impulsar tu próximo proyecto innovador.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-xl">
                <Github className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Encuéntranos en GitHub
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              GitHub es nuestro punto de encuentro principal. Aquí compartimos proyectos, 
              colaboramos en ideas innovadoras y construimos el futuro de la IA juntos.
            </p>
            
            <Button 
              asChild
              className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group text-lg"
            >
              <a 
                href="https://github.com/NodoSapien" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="mr-3 w-6 h-6" />
                Visitar NodoSapien en GitHub
                <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Colabora</h4>
                <p className="text-gray-600 text-sm">
                  Participa en discusiones y contribuye a proyectos de IA innovadores
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Explora</h4>
                <p className="text-gray-600 text-sm">
                  Descubre repositorios con soluciones de inteligencia artificial
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Conecta</h4>
                <p className="text-gray-600 text-sm">
                  Únete a una comunidad de innovadores y desarrolladores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
