import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code2, Terminal } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:bobbynandigam.official@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bobby-nandigam" },
  { icon: Github, label: "GitHub", href: "https://github.com/bobby-nandigam" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/bobby-nandigam" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20">
      {/* Vertical section indicator */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 flex flex-col items-center">
        <motion.div
          className="w-px h-full bg-border"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.8, ease }}
          style={{ transformOrigin: "top" }}
        />
      </div>

      {/* Status bar - top right */}
      <motion.div
        className="absolute top-24 right-6 md:right-12 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-xs font-mono text-primary tracking-wider">AVAILABLE FOR HIRE</span>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full ml-8 md:ml-16">
        {/* Code-style intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-8"
        >
          <span className="font-mono text-xs text-dim tracking-wider">// software engineer</span>
        </motion.div>

        {/* Name - editorial style */}
        <div className="mb-4">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease, delay: 0.3 }}
              className="flex items-baseline gap-4 md:gap-6"
            >
              <span className="font-mono text-sm text-dim hidden md:block">01</span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.85]">
                BOBBY
              </h1>
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease, delay: 0.4 }}
              className="flex items-baseline gap-4 md:gap-6"
            >
              <span className="font-mono text-sm text-primary hidden md:block">——</span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.85] text-primary">
                NANDIGAM
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Terminal-style description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-xl mb-12 mt-8"
        >
          <div className="flex items-start gap-3">
            <Terminal className="w-4 h-4 text-primary mt-1.5 shrink-0" />
            <div>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack engineer building production systems at scale.
                Web, Flutter mobile, and cloud infrastructure.
              </p>
              <div className="flex items-center gap-4 mt-3 font-mono text-xs text-dim">
                <span>1+ yr production</span>
                <span className="text-border">|</span>
                <span>10K+ daily requests</span>
                <span className="text-border">|</span>
                <span>99.5% uptime</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Links - minimal */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center gap-1"
        >
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-dim hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
            >
              <link.icon className="w-[18px] h-[18px]" />
            </a>
          ))}
          <div className="w-px h-6 bg-border mx-2" />
          <a
            href="tel:+917671985191"
            className="flex items-center gap-2 px-3 py-2 text-sm text-dim hover:text-primary font-mono transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="text-xs">+91 7671985191</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
