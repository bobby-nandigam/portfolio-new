import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Skills", href: "#skills", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Education", href: "#education", num: "04" },
  { label: "Contact", href: "#contact", num: "05" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="font-mono text-xs text-dim">
              <span className="text-primary">$</span> bobby.dev
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1.5 text-sm text-dim hover:text-foreground transition-colors font-display group"
              >
                <span className="font-mono text-[10px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">{item.num}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-2xl font-display font-bold text-foreground"
                >
                  <span className="font-mono text-sm text-primary">{item.num}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
