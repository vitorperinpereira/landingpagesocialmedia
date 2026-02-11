import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Plans() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 497",
      period: "/mês",
      description: "Para quem está começando a se posicionar.",
      features: [
        "12 posts (Feed/Stories)",
        "Legendas estratégicas",
        "Calendário editorial básico",
        "Suporte por email"
      ],
      highlight: false
    },
    {
      name: "Growth",
      price: "R$ 897",
      period: "/mês",
      description: "Para clínicas que querem acelerar o crescimento.",
      features: [
        "20 posts (Feed/Stories/Reels)",
        "Legendas com PNL avançada",
        "Calendário editorial completo",
        "Sugestão de Stories diários",
        "Suporte prioritário WhatsApp"
      ],
      highlight: true
    },
    {
      name: "Authority",
      price: "R$ 1.497",
      period: "/mês",
      description: "Gestão completa para autoridade máxima.",
      features: [
        "30 posts (Conteúdo diário)",
        "Roteiros para vídeos longos",
        "Design exclusivo premium",
        "Gestão de tráfego pago (setup)",
        "Consultoria mensal de 1h"
      ],
      highlight: false
    }
  ];

  return (
    <section id="plans" className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-6">Escolha seu plano</h2>
          <p className="text-gray-200 font-editorial text-xl opacity-90">Sem fidelidade. Cancele quando quiser.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`glass-panel p-8 transition-all duration-500 rounded-none ${
                plan.highlight 
                  ? "border border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.1)] relative transform md:-translate-y-4 z-10" 
                  : "hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-black px-6 py-1 text-xs font-bold tracking-[0.2em] uppercase shadow-md">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif italic mb-2 text-white">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-8 h-10 font-sans tracking-wide">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                  <span className="text-gray-400 font-serif italic">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <Check className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="font-light tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full h-14 font-bold tracking-[0.15em] uppercase rounded-none transition-all duration-300 ${
                  plan.highlight 
                    ? "bg-[#D4AF37] text-black hover:bg-[#F8E28B]" 
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                }`}
                variant={plan.highlight ? "default" : "outline"}
              >
                Assinar Agora
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
