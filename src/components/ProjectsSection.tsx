import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShoppingCart, MessageSquareCode, HardDrive, Microscope, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

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

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative p-6 bg-card border border-border rounded-xl flex flex-col overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.12)] will-change-transform ${project.featured ? 'md:col-span-2' : ''}`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
        <motion.div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <motion.div 
            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500"
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <project.icon className="w-6 h-6 text-primary" />
          </motion.div>
          <motion.div
            whileHover={{ x: 2, y: -2 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowUpRight className="w-5 h-5 text-dim group-hover:text-primary transition-all duration-300" />
          </motion.div>
        </div>

        <h3 className="text-lg font-display font-bold text-foreground mb-1">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

        <div className="flex gap-2 mb-5 flex-wrap">
          {project.metrics.map((m) => (
            <motion.span
              key={m}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-primary/10 text-primary text-xs font-display font-medium rounded-md border border-primary/10"
            >
              {m}
            </motion.span>
          ))}
        </div>

        <ul className="space-y-2.5 mt-auto">
          {project.points.map((p, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + j * 0.05 }}
              className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2.5 group/item"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />
              <span className="group-hover/item:text-foreground transition-colors duration-300">{p}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden" id="projects">
      {/* Liquid blob */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl bg-primary/[0.04] right-0 top-1/4"
        animate={{
          scale: [1, 1.1, 0.95, 1],
          borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "50% 50% 60% 40%", "40% 60% 60% 40%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <motion.span
            className="text-primary text-sm font-display tracking-widest uppercase inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Projects</h2>
          <motion.div 
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
