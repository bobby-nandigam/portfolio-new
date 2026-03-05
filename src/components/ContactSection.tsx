import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code2, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "bobbynandigam.official@gmail.com", href: "mailto:bobbynandigam.official@gmail.com" },
  { icon: Phone, label: "+91 7671985191", href: "tel:+917671985191" },
  { icon: Linkedin, label: "linkedin.com/in/bobby-nandigam", href: "https://linkedin.com/in/bobby-nandigam" },
  { icon: Github, label: "github.com/bobby-nandigam", href: "https://github.com/bobby-nandigam" },
  { icon: Code2, label: "leetcode.com/bobby-nandigam", href: "https://leetcode.com/bobby-nandigam" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ContactSection = () => {
  return (
    <section className="py-28 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Connect</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Let's Talk</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
                <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300 shrink-0">
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
          transition={{ delay: 0.3 }}
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
