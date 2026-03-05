import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, Code2 } from "lucide-react";

const links = [
  { icon: Phone, label: "+91 7671985191", href: "tel:+917671985191" },
  { icon: Mail, label: "bobbynandigam.official@gmail.com", href: "mailto:bobbynandigam.official@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bobby-nandigam" },
  { icon: Github, label: "GitHub", href: "https://github.com/bobby-nandigam" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/bobby-nandigam" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Left accent */}
      <motion.div
        className="absolute left-0 top-0 w-[2px] h-full bg-primary/20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease }}
        style={{ transformOrigin: "top" }}
      />

      <div className="relative z-10 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground tracking-widest uppercase font-display">Nellore, Andhra Pradesh</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] mb-2"
          >
            BOBBY
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] mb-10 text-primary"
          >
            NANDIGAM
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
          className="flex items-start gap-4 mb-12"
        >
          <motion.div
            className="w-12 h-[2px] bg-primary mt-3 shrink-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            style={{ transformOrigin: "left" }}
          />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body">
            Software Engineer crafting full-stack web & Flutter mobile apps with scalable backend systems.
            1+ year building production-grade platforms handling 10K+ daily requests.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border hover:border-primary/50 hover:text-primary transition-all duration-300"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.06, ease }}
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
