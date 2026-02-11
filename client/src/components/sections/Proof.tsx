import { Star, TrendingUp, Users, Clock } from "lucide-react";
import dentalDashboard from "@/assets/images/dental-dashboard.png";
import { motion } from "framer-motion";

export function Proof() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-1/3 h-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
           <h2 className="text-4xl md:text-5xl text-white mb-6">
              <span className="font-serif italic font-light">Resultados</span> <span className="font-sans font-bold uppercase tracking-tight">Mensuráveis</span>
            </h2>
            <p className="text-gray-200 font-editorial text-xl opacity-90 max-w-2xl mx-auto">
              Dados reais de clínicas que elevaram seu padrão de mercado.
            </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonials Column */}
          <div className="space-y-6">
             <div className="grid gap-6">
              {[
                {
                  quote: "O nível de sofisticação visual elevou nossa percepção de valor instantaneamente. Pacientes premium notaram a diferença.",
                  author: "Dr. Rafael Mendes",
                  role: "Implantodontista",
                  stats: "+45% Ticket Médio"
                },
                {
                  quote: "Não é apenas marketing, é branding de alta performance. O posicionamento da minha clínica mudou de patamar.",
                  author: "Dra. Juliana Costa",
                  role: "Ortodontista",
                  stats: "3x mais Private"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="p-8 glass-panel transition-colors hover:border-[#D4AF37]/30"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-[#D4AF37]">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-1">
                      {item.stats}
                    </span>
                  </div>
                  <p className="text-xl text-gray-200 mb-8 font-serif italic leading-relaxed">"{item.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37]/50 p-0.5">
                       <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-black" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm tracking-wide uppercase">{item.author}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-sans">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
             </div>
          </div>
          
          {/* Dashboard Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative glass-panel-gold p-2">
               <img 
                 src={dentalDashboard} 
                 alt="Dashboard de resultados" 
                 className="w-full h-auto object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
               />
               
               {/* Floating Overlay Stats */}
               <div className="absolute -bottom-6 -left-6 right-6 p-8 bg-black border border-white/10 shadow-2xl">
                 <div className="grid grid-cols-3 gap-8 divide-x divide-white/10">
                   <div className="text-center">
                     <div className="text-3xl font-serif italic text-white mb-1">+145%</div>
                     <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Engajamento</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-serif italic text-white mb-1">+3x</div>
                     <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Pacientes</div>
                   </div>
                   <div className="text-center">
                     <div className="text-3xl font-serif italic text-white mb-1">-12h</div>
                     <div className="text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold">Operacional</div>
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
