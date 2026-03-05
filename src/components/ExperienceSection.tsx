import { motion } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "BillionBright Solutions LLP",
    period: "Sep 2024 – Jan 2026",
    tag: "FULL-TIME",
    highlights: [
      "Developed Rupeecom — full-stack e-commerce website and cross-platform Flutter mobile app with product catalog, cart, checkout & payment integration",
      "Built responsive frontend interfaces and Flutter UI components delivering seamless UX across web and mobile",
      "Designed backend services handling 10K+ daily requests with 99.5% uptime",
      "Improved API response latency from 900ms → 250ms via indexing, caching & async handling",
      "Implemented JWT auth & RBAC-based authorization with multi-tenant data isolation",
      "Built NLP-to-SQL mapping engine in Golang, reducing manual DB querying by 80%",
      "Led code reviews, wrote unit tests, improved observability with structured logging",
    ],
  },
  {
    role: "AI/ML Intern",
    company: "Slash Mark IT Solutions",
    period: "Jan 2024 – May 2024",
    tag: "INTERNSHIP",
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
    <section className="py-32 px-6 md:px-12" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6 mb-20"
        >
          <span className="font-mono text-sm text-primary mt-2 shrink-0">02</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Experience</h2>
            <p className="text-muted-foreground mt-3 max-w-md text-sm">
              Production engineering with measurable impact on scale and reliability.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="group"
            >
              <div className="p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/20 transition-colors duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                      <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">{exp.tag}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-3.5 h-3.5 text-dim" />
                      <span className="text-sm">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-dim text-xs font-mono shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed group/item"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-primary/60 shrink-0 mt-1" />
                      <span className="group-hover/item:text-foreground transition-colors duration-200">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
