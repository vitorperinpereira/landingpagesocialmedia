import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O Problema", href: "#problem" },
    { name: "Solução", href: "#solution" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Planos", href: "#plans" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        isScrolled 
          ? "bg-black/50 backdrop-blur-xl border-white/5 py-4" 
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white">
            GMV<span className="text-[#D4AF37]">.</span>Social
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-[0.15em] uppercase text-white/70 hover:text-[#D4AF37] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="font-bold bg-white text-black hover:bg-[#D4AF37] hover:text-black rounded-none px-6 tracking-widest uppercase text-xs transition-all duration-300">
            Começar Agora
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-widest uppercase text-white hover:text-[#D4AF37]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full font-bold bg-[#D4AF37] text-black rounded-none uppercase tracking-widest">
            Começar Agora
          </Button>
        </div>
      )}
    </nav>
  );
}
