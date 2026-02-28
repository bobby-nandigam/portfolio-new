import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, Github, Code2 } from "lucide-react";

const links = [
  { icon: Phone, label: "+91 7671985191", href: "tel:+917671985191" },
  { icon: Mail, label: "bobbynandigam.official@gmail.com", href: "mailto:bobbynandigam.official@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bobby-nandigam" },
  { icon: Github, label: "GitHub", href: "https://github.com/bobby-nandigam" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com/bobby-nandigam" },
];

// Liquid blob component
const LiquidBlob = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      scale: [1, 1.2, 0.9, 1.1, 1],
      x: [0, 30, -20, 15, 0],
      y: [0, -25, 15, -10, 0],
      borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "50% 50% 60% 40%", "40% 60% 50% 50%", "40% 60% 60% 40%"],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Liquid blobs */}
      <LiquidBlob className="w-96 h-96 bg-primary -top-20 -right-20" delay={0} />
      <LiquidBlob className="w-72 h-72 bg-primary/60 bottom-20 -left-10" delay={3} />
      <LiquidBlob className="w-64 h-64 bg-primary/40 top-1/3 right-1/4" delay={6} />

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
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground tracking-widest uppercase">Nellore, Andhra Pradesh</span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] mb-2"
          >
            BOBBY
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] mb-8 text-primary"
          >
            NANDIGAM
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="flex items-center gap-4 mb-10"
        >
          <motion.div 
            className="w-16 h-[2px] bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
          />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-body">
            Software Engineer building scalable backend systems & production-grade APIs.
            1+ year designing high-performance architectures handling 10K+ daily requests.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-all duration-500 hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
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
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
