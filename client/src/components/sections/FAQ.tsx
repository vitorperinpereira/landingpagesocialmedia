import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  const faqs = [
    {
      q: "Preciso enviar as fotos?",
      a: "Sim e não. Nós temos um banco de imagens premium odontológicas, mas o ideal é mesclar com fotos reais suas. Nós te orientamos como tirar fotos boas pelo celular."
    },
    {
      q: "Serve para qualquer especialidade?",
      a: "Sim. Nossa IA é treinada para Ortodontia, Implantodontia, HOF, Endodontia, Odontopediatria e Clínica Geral."
    },
    {
      q: "Como funciona a aprovação?",
      a: "Você recebe um link com todos os posts do mês. Pode comentar pedindo alteração ou aprovar com um clique."
    },
    {
      q: "Tem fidelidade?",
      a: "Não. Você pode cancelar a qualquer momento sem multa."
    }
  ];

  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center text-white">Perguntas Frequentes</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-[#D4AF37] transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
