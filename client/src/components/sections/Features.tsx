import { Calendar, PenTool, BarChart3, Clock, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Calendário Estratégico",
      description: "Planejamento mensal focado em datas comerciais e procedimentos de alto valor."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Design Premium",
      description: "Artes sofisticadas que transmitem autoridade e afastam pacientes que só querem preço."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Legendas com PNL",
      description: "Copywriting persuasivo que toca nas dores e desejos do paciente ideal."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Economia de Tempo",
      description: "Aprove e poste em minutos. Deixe a gente cuidar da parte chata da produção."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Foco em Conversão",
      description: "Cada post tem um objetivo claro: levar o paciente para o direct ou WhatsApp."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Relatórios Simplificados",
      description: "Entenda o que está funcionando sem precisar decifrar gráficos complexos."
    }
  ];

  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-sans">O que você recebe</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-2">
            Padrão Ouro
          </h2>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">
             em Posicionamento
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 glass-panel hover:bg-white/5 transition-all duration-500 group rounded-none border-l-2 border-l-transparent hover:border-l-[#D4AF37] text-center md:text-left"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500 mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif italic mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 font-editorial text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
