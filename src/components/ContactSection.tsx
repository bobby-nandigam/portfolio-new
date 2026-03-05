import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Code2, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "bobbynandigam.official@gmail.com", href: "mailto:bobbynandigam.official@gmail.com", tag: "EMAIL" },
  { icon: Phone, label: "+91 7671985191", href: "tel:+917671985191", tag: "PHONE" },
  { icon: Linkedin, label: "linkedin.com/in/bobby-nandigam", href: "https://linkedin.com/in/bobby-nandigam", tag: "LINKEDIN" },
  { icon: Github, label: "github.com/bobby-nandigam", href: "https://github.com/bobby-nandigam", tag: "GITHUB" },
  { icon: Code2, label: "leetcode.com/bobby-nandigam", href: "https://leetcode.com/bobby-nandigam", tag: "LEETCODE" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ContactSection = () => {
  return (
    <section className="py-32 px-6 md:px-12" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6 mb-20"
        >
          <span className="font-mono text-sm text-primary mt-2 shrink-0">05</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Let's Connect</h2>
            <p className="text-muted-foreground mt-3 max-w-md text-sm">
              Open to full-stack engineering, mobile development, and platform engineering roles at top tech companies.
            </p>
          </div>
        </motion.div>

        {/* Contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden max-w-3xl">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-card p-5 flex flex-col gap-3 group hover:bg-secondary/50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-primary">{link.tag}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-dim group-hover:text-primary transition-colors duration-200" />
              </div>
              <div className="flex items-center gap-2">
                <link.icon className="w-4 h-4 text-dim group-hover:text-primary transition-colors duration-200 shrink-0" />
                <span className="text-xs text-dim group-hover:text-foreground transition-colors truncate">
                  {link.label}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 pt-8 border-t border-border flex items-center justify-between"
        >
          <p className="font-mono text-[10px] text-dim">
            <span className="text-primary">$</span> bobby.dev — © 2026
          </p>
          <p className="font-mono text-[10px] text-dim">
            Built with precision
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
