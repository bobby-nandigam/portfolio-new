import { motion } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "BillionBright Solutions LLP",
    period: "Sep 2024 – Jan 2026",
    highlights: [
      "Developed Rupeecom — a full-stack e-commerce website and cross-platform Flutter mobile application with product catalog, cart, checkout & payment integration",
      "Built responsive frontend interfaces and Flutter UI components delivering seamless user experiences across web and mobile",
      "Designed backend services handling 10K+ daily requests with 99.5% uptime using modular architecture",
      "Improved API response latency from 900ms to 250ms via indexing, caching & async handling",
      "Implemented JWT auth & RBAC-based authorization with strict multi-tenant data isolation",
      "Built NLP-to-SQL mapping engine in Golang, reducing manual DB querying by 80%",
      "Wrote unit tests, led code reviews, and improved observability with logging & monitoring",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Slash Mark IT Solutions (OPC) Pvt. Ltd",
    period: "Jan 2024 – May 2024",
    highlights: [
      "Developed plagiarism detection systems using NLP similarity models",
      "Built deep learning-based object detection pipelines for image recognition",
      "Implemented sentiment analysis models for polarity classification",
      "Optimized model pipelines through preprocessing, tuning & API deployment",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden" id="experience">
      {/* Liquid blob */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl bg-primary/[0.04] -left-20 top-1/3"
        animate={{
          scale: [1, 1.15, 0.95, 1],
          borderRadius: ["50% 50% 60% 40%", "40% 60% 50% 50%", "60% 40% 40% 60%", "50% 50% 60% 40%"],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.span
            className="text-primary text-sm font-display tracking-widest uppercase inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Career
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Experience</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <motion.div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-border"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-8 pl-8 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-8 md:-left-20 top-8 w-4 h-4 rounded-full border-2 border-primary bg-background z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: "spring" }}
                />
                <motion.div
                  className="absolute -left-8 md:-left-20 top-8 w-4 h-4 rounded-full bg-primary/30 z-0"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                />

                <div className="p-6 md:p-8 bg-card border border-border rounded-xl group hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.15)]">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden rounded-t-xl">
                    <motion.div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <motion.div
                      className="flex items-center gap-2 text-dim text-sm shrink-0 px-3 py-1.5 bg-secondary rounded-lg border border-border"
                      whileHover={{ scale: 1.03 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="font-display">{exp.period}</span>
                    </motion.div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 + j * 0.05 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed group/item"
                      >
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover/item:translate-x-0.5 transition-transform duration-300" />
                        <span className="group-hover/item:text-foreground transition-colors duration-300">{h}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
