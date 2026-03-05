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

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ExperienceSection = () => {
  return (
    <section className="py-28 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Experience</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-8 top-0 bottom-0 w-[2px] bg-border"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-8 pl-8 md:pl-20">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 md:-left-20 top-8 w-4 h-4 rounded-full border-2 border-primary bg-background z-10" />

                <div className="p-6 md:p-8 bg-card border border-border rounded-xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden rounded-t-xl">
                    <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-dim text-sm shrink-0 px-3 py-1.5 bg-secondary rounded-lg border border-border">
                      <Calendar className="w-4 h-4" />
                      <span className="font-display">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed group/item"
                      >
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="group-hover/item:text-foreground transition-colors duration-300">{h}</span>
                      </li>
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
