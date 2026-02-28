import { motion } from "framer-motion";
import { ShoppingCart, MessageSquareCode, HardDrive, Microscope, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "Rupeecom E-commerce Backend",
    subtitle: "Multi-tenant e-commerce platform optimization",
    metrics: ["45% faster page load", "Scalable microservice architecture"],
    points: [
      "Enhanced backend architecture supporting high traffic and scalable operations",
      "Optimized asset delivery pipelines and API request handling",
      "Improved database performance using indexing and optimized queries",
      "Applied structured testing, logging, and review practices",
    ],
  },
  {
    icon: MessageSquareCode,
    title: "NLP to SQL Query Generator",
    subtitle: "Natural language to database query engine",
    metrics: ["80% less manual querying", "Real-time SQL execution"],
    points: [
      "Designed structured parsing logic converting NL queries to SQL statements",
      "Integrated with backend APIs for real-time query execution",
      "Handled edge cases — ambiguous queries and invalid inputs",
      "Maintainable design supporting future schema extensions",
    ],
  },
  {
    icon: HardDrive,
    title: "Scalable Document Storage System",
    subtitle: "Async file upload with multi-tenant isolation",
    metrics: ["500+ concurrent uploads", "40% faster upload speed"],
    points: [
      "Asynchronous file upload with worker pooling and queue-based processing",
      "Azure Blob Storage integration for scalable retrieval",
      "JWT auth & RBAC-based multi-tenant file isolation",
      "Modular design supporting file versioning & metadata search",
    ],
  },
  {
    icon: Microscope,
    title: "Skin Cancer Detection System",
    subtitle: "CNN-based medical image classification",
    metrics: ["87% accuracy", "12% fewer false negatives"],
    points: [
      "CNN model trained on 13K ISIC images with augmentation",
      "Flask-based inference API for scalable deployment",
      "Hyperparameter tuning and cross-validation optimization",
      "Optimized preprocessing pipelines for low inference latency",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Work</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-dim group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-lg font-display font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

              <div className="flex gap-2 mb-5 flex-wrap">
                {project.metrics.map((m) => (
                  <span key={m} className="px-3 py-1 bg-primary/10 text-primary text-xs font-display font-medium rounded-md">
                    {m}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mt-auto">
                {project.points.map((p, j) => (
                  <li key={j} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-1.5" />
                    {p}
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

export default ProjectsSection;
