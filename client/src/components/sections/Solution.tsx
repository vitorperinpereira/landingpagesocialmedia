import { CheckCircle2 } from "lucide-react";
import holographicAnalysis from "@/assets/images/holographic-analysis.png";
import { motion } from "framer-motion";

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-transparent relative border-y border-white/5 overflow-hidden">
      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 md:order-1"
          >
             {/* Holographic Visual */}
            <div className="aspect-square glass-panel-gold rounded-none relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${holographicAnalysis})` }}
              />
              
              {/* Overlay UI Elements */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-6 left-6 border-l border-t border-[#D4AF37]/50 w-8 h-8" />
                <div className="absolute bottom-6 right-6 border-r border-b border-[#D4AF37]/50 w-8 h-8" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
              </div>

              {/* Floating Data Card */}
              <div className="absolute bottom-8 right-8 p-4 bg-black/80 backdrop-blur-md border border-[#D4AF37]/20 max-w-[220px] shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Analysis Complete</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Engagement</span>
                    <span className="text-white font-mono">98.5%</span>
                  </div>
                  <div className="h-0.5 w-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#D4AF37] w-[98.5%]" />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Conversion</span>
                    <span className="text-white font-mono">High</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-[#D4AF37]/20">
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
              AI Driven Strategy
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 text-white leading-tight">
              <span className="font-serif italic font-light block">Análise de Dados</span>
              <span className="font-sans font-bold uppercase tracking-tight text-gradient-gold">
                Odontológicos 3.0
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 font-editorial leading-relaxed md:border-l-2 md:border-[#D4AF37]/20 md:pl-6">
              O GMV Social IA não é apenas criativo. É analítico. Utilizamos deep learning para entender padrões de comportamento de pacientes de alta renda e replicar o sucesso no seu perfil.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "Conteúdos tecnicamente precisos",
                "Neuromarketing aplicado",
                "Design System proprietário",
                "Targeting de especialidade"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass-panel hover:bg-white/5 transition-colors border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-200 tracking-wide uppercase">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
