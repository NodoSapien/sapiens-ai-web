
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-blue-100/20 to-violet-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/50">
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span className="text-sm font-medium text-gray-700">Innovación impulsada por IA</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent">
              NodoSapiens
            </span>
            <br />
            <span className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl">
              Donde las ideas cobran vida
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Somos una organización de innovación que impulsa el desarrollo de ideas mediante el uso estratégico 
            de inteligencia artificial. Transformamos el pensamiento humano en soluciones inteligentes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Explorar soluciones
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 group">
              <Zap className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              Ver proyectos
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-20 left-10 animate-bounce delay-300">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg opacity-70 rotate-12"></div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-700">
        <div className="w-8 h-8 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default HeroSection;
