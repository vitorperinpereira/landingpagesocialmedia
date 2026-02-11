import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-transparent text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left"
        >
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold tracking-tight mb-6 text-white">
              GMV<span className="text-[#D4AF37]">.</span>Social
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto md:mx-0 font-editorial text-lg">
              Tecnologia de ponta para dentistas que não têm tempo a perder.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-xs text-[#D4AF37]">Produto</h3>
            <ul className="space-y-4 text-gray-500 text-sm tracking-wide">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Como funciona</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Casos de Sucesso</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-white uppercase tracking-widest text-xs text-[#D4AF37]">Legal</h3>
            <ul className="space-y-4 text-gray-500 text-sm tracking-wide">
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contato</a></li>
            </ul>
          </div>
        </motion.div>
        
        <div className="pt-8 border-t border-white/5 text-center text-gray-600 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} GMV Social IA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
