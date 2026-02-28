import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, Code2 } from "lucide-react";

const links = [
  { icon: Phone, label: "+91 7671985191", href: "tel:+917671985191" },
  { icon: Mail, label: "bobbynandigam.official@gmail.com", href: "mailto:bobbynandigam.official@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bobby-nandigam" },
  { icon: Github, label: "GitHub", href: "https://github.com/bobby-nandigam" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/bobby-nandigam" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Accent line */}
      <motion.div
        className="absolute left-0 top-0 w-1 h-full bg-primary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <div className="relative z-10 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground tracking-widest uppercase">Nellore, Andhra Pradesh</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] mb-8"
        >
          BOBBY
          <br />
          <span className="text-primary">NANDIGAM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 font-body"
        >
          Software Engineer building scalable backend systems & production-grade APIs.
          1+ year designing high-performance architectures handling 10K+ daily requests.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-5 h-9 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
