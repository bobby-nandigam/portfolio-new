import { motion } from "framer-motion";
import { ShoppingCart, MessageSquareCode, HardDrive, Microscope, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "Rupeecom E-commerce Platform",
    subtitle: "Full-stack e-commerce website & Flutter mobile app",
    metrics: ["45% faster page load", "Cross-platform Flutter app"],
    points: [
      "Built a complete e-commerce website with product catalog, cart, checkout & payment flows",
      "Developed cross-platform Flutter mobile app with seamless user experience",
      "Optimized asset delivery pipelines and API request handling for fast performance",
      "Implemented responsive UI, real-time inventory updates & order tracking",
    ],
    featured: true,
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

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.08, ease }}
    className={`group relative p-6 bg-card border border-border rounded-xl flex flex-col overflow-hidden transition-all duration-300 hover:border-primary/30 ${project.featured ? 'md:col-span-2' : ''}`}
  >
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
      <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
    </div>

    <div className="flex items-start justify-between mb-5">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
        <project.icon className="w-6 h-6 text-primary" />
      </div>
      <ArrowUpRight className="w-5 h-5 text-dim group-hover:text-primary transition-colors duration-300" />
    </div>

    <h3 className="text-lg font-display font-bold text-foreground mb-1">{project.title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

    <div className="flex gap-2 mb-5 flex-wrap">
      {project.metrics.map((m) => (
        <span
          key={m}
          className="px-3 py-1 bg-primary/10 text-primary text-xs font-display font-medium rounded-md border border-primary/10"
        >
          {m}
        </span>
      ))}
    </div>

    <ul className="space-y-2.5 mt-auto">
      {project.points.map((p, j) => (
        <li
          key={j}
          className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2.5 group/item"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
          <span className="group-hover/item:text-foreground transition-colors duration-300">{p}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section className="py-28 px-6" id="projects">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Work</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Projects</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
