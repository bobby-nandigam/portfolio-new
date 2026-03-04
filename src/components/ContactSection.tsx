import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code2, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "bobbynandigam.official@gmail.com", href: "mailto:bobbynandigam.official@gmail.com" },
  { icon: Phone, label: "+91 7671985191", href: "tel:+917671985191" },
  { icon: Linkedin, label: "linkedin.com/in/bobby-nandigam", href: "https://linkedin.com/in/bobby-nandigam" },
  { icon: Github, label: "github.com/bobby-nandigam", href: "https://github.com/bobby-nandigam" },
  { icon: Code2, label: "leetcode.com/bobby-nandigam", href: "https://leetcode.com/bobby-nandigam" },
];

const ContactSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden" id="contact">
      {/* Liquid blob */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl bg-primary/[0.04] left-1/4 top-10"
        animate={{
          scale: [1, 1.15, 0.95, 1],
          borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "50% 50% 60% 40%", "40% 60% 60% 40%"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary text-sm font-display tracking-widest uppercase inline-block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Connect
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Let's Talk</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Open to full-stack engineering, Flutter mobile development, and platform engineering roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.3 } }}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-all duration-500 group hover:shadow-[0_0_25px_-8px_hsl(var(--primary)/0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
                <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 shrink-0">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                {link.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-dim group-hover:text-primary ml-auto shrink-0 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-8 border-t border-border text-center"
        >
          <p className="text-xs text-dim font-display">
            Designed & built with precision — Bobby Nandigam © 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
