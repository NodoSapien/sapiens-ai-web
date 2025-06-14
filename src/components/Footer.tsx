
import { Brain, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Brain className="w-8 h-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                NodoSapiens
              </span>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Transformamos ideas visionarias en realidades tangibles mediante la convergencia 
              entre creatividad humana e inteligencia artificial.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/NodoSapien" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Análisis Inteligente</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sistemas Adaptativos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Automatización</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Estrategia Digital</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#sobre-nosotros" className="hover:text-blue-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a></li>
              <li>
                <a 
                  href="https://github.com/NodoSapien" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NodoSapiens. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Términos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
