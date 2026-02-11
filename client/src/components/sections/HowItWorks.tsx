import roboticDentistry from "@/assets/images/robotic-dentistry.png";
import { motion } from "framer-motion";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico AI",
      description: "Nossa IA analisa seu perfil atual e define sua linha editorial baseada na sua especialidade e público-alvo."
    },
    {
      number: "02",
      title: "Geração e Aprovação",
      description: "Você recebe o planejamento mensal e as artes prontas. Aprova ou pede ajustes com um clique."
    },
    {
      number: "03",
      title: "Escala Digital",
      description: "Seu conteúdo vai ao ar com constância. Você foca em atender pacientes enquanto sua autoridade digital cresce."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-transparent border-y border-white/5 relative overflow-hidden">
       {/* Background Image Layer */}
       <div 
          className="absolute inset-0 opacity-[0.1] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${roboticDentistry})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-sans">Workflow</span>
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            <span className="font-serif italic font-light block">Precisão Robótica,</span>
            <span className="font-sans font-bold uppercase tracking-tight">Toque Humano</span>
          </h2>
          <p className="text-gray-200 font-editorial text-xl max-w-xl mx-auto leading-relaxed opacity-90">
            Um processo desenhado para eliminar ineficiências e entregar qualidade máxima.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="w-24 h-24 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-[#D4AF37]/10 blur-xl rounded-full group-hover:bg-[#D4AF37]/30 transition-colors" />
                <div className="relative w-full h-full bg-black border border-[#D4AF37]/30 rounded-full flex items-center justify-center text-3xl font-bold text-[#D4AF37] font-serif italic shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:scale-110 transition-transform duration-500">
                  {step.number}
                </div>
              </div>
              
              <div className="text-center px-6 py-8 glass-panel rounded-none hover:bg-white/5 transition-colors">
                <h3 className="text-xl font-bold mb-3 text-white uppercase tracking-widest text-sm">{step.title}</h3>
                <p className="text-gray-300 text-lg font-editorial leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
