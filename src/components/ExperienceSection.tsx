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
    <section className="py-24 px-6" id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 md:p-8 bg-card border border-border rounded-lg group hover:border-primary/40 transition-colors duration-300"
            >
              {/* Accent bar */}
              <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-dim text-sm shrink-0">
                  <Calendar className="w-4 h-4" />
                  <span className="font-display">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
