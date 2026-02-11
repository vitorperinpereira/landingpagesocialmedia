import { XCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Problem() {
  const problems = [
    {
      title: "O ciclo da 'artezinha'",
      description: "Você gasta horas no Canva fazendo posts que ninguém curte e que não trazem pacientes particulares.",
    },
    {
      title: "Agência genérica",
      description: "Eles postam 'Dia do Sorriso' e fotos de banco de imagem que não conectam com a realidade do seu consultório.",
    },
    {
      title: "Inconstância crônica",
      description: "Você posta muito por uma semana, cansa, e some por um mês. O algoritmo te pune e você perde relevância.",
    }
  ];

  return (
    <section id="problem" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-xs mb-4 block font-sans">O Cenário Atual</span>
          <h2 className="text-3xl md:text-5xl font-serif italic mb-6 text-white">
            Por que é tão difícil crescer?
          </h2>
          <p className="text-gray-200 font-editorial text-xl leading-relaxed opacity-90">
            A maioria dos dentistas erra tentando ser designer ou contratando quem não entende de odonto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 glass-panel border-t-2 border-t-transparent hover:border-t-red-500/50 transition-all duration-500 text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform mx-auto md:mx-0">
                <XCircle size={24} />
              </div>
              <h3 className="text-xl font-serif italic mb-3 text-white">{item.title}</h3>
              <p className="text-gray-300 font-editorial text-lg leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
