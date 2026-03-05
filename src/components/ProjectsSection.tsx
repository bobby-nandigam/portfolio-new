import { motion } from "framer-motion";
import { ShoppingCart, MessageSquareCode, HardDrive, Microscope, ArrowUpRight } from "lucide-react";

const projects = [
  {
    icon: ShoppingCart,
    title: "Rupeecom",
    subtitle: "E-commerce Platform & Flutter App",
    tech: ["Flutter", "FastAPI", "PostgreSQL", "Azure"],
    metrics: ["45% faster loads", "Cross-platform"],
    points: [
      "Full-stack e-commerce with product catalog, cart, checkout & payment flows",
      "Cross-platform Flutter mobile app with seamless UX",
      "Optimized asset delivery and API handling for performance",
      "Real-time inventory updates & order tracking",
    ],
    featured: true,
  },
  {
    icon: MessageSquareCode,
    title: "NLP → SQL Engine",
    subtitle: "Natural Language Query Generator",
    tech: ["Golang", "PostgreSQL", "NLP"],
    metrics: ["80% less manual work", "Real-time execution"],
    points: [
      "Structured parsing logic converting natural language to SQL",
      "Backend API integration for real-time query execution",
      "Edge case handling for ambiguous and invalid inputs",
    ],
  },
  {
    icon: HardDrive,
    title: "DocVault",
    subtitle: "Scalable Document Storage",
    tech: ["Python", "Azure Blob", "JWT", "Docker"],
    metrics: ["500+ concurrent uploads", "40% faster"],
    points: [
      "Async file upload with worker pooling and queue-based processing",
      "Azure Blob Storage with multi-tenant RBAC isolation",
      "File versioning & metadata search support",
    ],
  },
  {
    icon: Microscope,
    title: "SkinScan AI",
    subtitle: "Medical Image Classification",
    tech: ["Python", "TensorFlow", "Flask"],
    metrics: ["87% accuracy", "12% fewer FN"],
    points: [
      "CNN trained on 13K ISIC images with augmentation",
      "Flask inference API for scalable deployment",
      "Optimized preprocessing for low latency",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.08, ease }}
    className={`group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/20 transition-colors duration-300 ${project.featured ? 'md:col-span-2' : ''}`}
  >
    <div className="p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <project.icon className="w-5 h-5 text-primary" />
          <div>
            <h3 className="font-display font-bold text-foreground">{project.title}</h3>
            <p className="text-xs text-dim">{project.subtitle}</p>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-dim group-hover:text-primary transition-colors duration-200" />
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded">
            {t}
          </span>
        ))}
      </div>

      {/* Metrics */}
      <div className="flex gap-3 mb-4">
        {project.metrics.map((m) => (
          <span key={m} className="font-mono text-xs text-dim">
            {m}
          </span>
        ))}
      </div>

      {/* Points */}
      <ul className="space-y-1.5">
        {project.points.map((p, j) => (
          <li key={j} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
            <span className="text-primary/40 mt-0.5 shrink-0">—</span>
            <span className="group-hover:text-foreground/80 transition-colors duration-200">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  return (
    <section className="py-32 px-6 md:px-12" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6 mb-20"
        >
          <span className="font-mono text-sm text-primary mt-2 shrink-0">03</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Projects</h2>
            <p className="text-muted-foreground mt-3 max-w-md text-sm">
              Shipped products with real users, real scale, and real impact.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
