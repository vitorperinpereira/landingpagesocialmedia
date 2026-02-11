import { Button } from "@/components/ui/button";
import luxuryHeroBg from "@/assets/images/luxury-hero-bg.png"; // Keep for fallback or blend if needed
import techToothGold from "@/assets/images/tech-tooth-gold.png";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Hero Specific Background - Gold Tech Tooth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.9] mix-blend-screen md:mix-blend-normal" 
          style={{
            backgroundImage: `url(${techToothGold})`,
            backgroundSize: "contain",
            backgroundPosition: "center right -100px", // Desktop: Push to right
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Mobile Adjustment for Tooth Image */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 768px) {
            .absolute.inset-0.opacity-\\[0\\.9\\].mix-blend-screen {
              background-size: 140% !important;
              background-position: center bottom -50px !important;
              opacity: 0.5 !important;
            }
          }
        `}} />
        
        {/* Cinematic Vignette for Hero Only */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:via-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex items-center">
        <div className="max-w-4xl mx-auto md:mx-0 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_10px_#D4AF37]" />
              Exclusividade para Odontologia
            </div>
            
            <h1 className="text-3xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
              <span className="font-serif italic font-light block mb-2 text-white/90">Conteúdo</span>
              <span className="font-sans font-bold tracking-tight uppercase block text-white drop-shadow-2xl break-words">
                Odontológico com IA,
              </span>
              <span className="font-serif italic font-medium text-gradient-gold block mt-2">
                com método e constância.
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-2xl font-light font-editorial mb-10 mr-auto opacity-90 drop-shadow-sm">
              A gente planeja, produz e organiza seu Instagram com estratégia de clínica e velocidade de IA. Sem post aleatório e sem depender de inspiração.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-start">
              <Button size="lg" className="w-full sm:w-auto h-14 md:h-16 px-6 md:px-10 text-xs md:text-lg font-bold bg-white text-black hover:bg-[#D4AF37] hover:text-black transition-all duration-500 rounded-none tracking-widest uppercase whitespace-normal h-auto py-4">
                Quero meu conteúdo pronto
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Button>
              
              <button className="group flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-[#D4AF37] transition-colors pt-2 sm:pt-0">
                <span className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#D4AF37] flex items-center justify-center transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </span>
                Ver como funciona
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Luxury Marquee */}
      <div className="relative z-20 mt-auto">
        <Marquee 
          items={[
            "Inteligência Artificial",
            "Excelência Odontológica",
            "Branding de Luxo",
            "Posicionamento Premium",
            "Marketing Preditivo"
          ]} 
          className="bg-black border-y border-[#D4AF37]/20 py-4 text-white/70"
        />
      </div>
    </section>
  );
}
