import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Code, Server, Database, Cloud, Cpu, Wrench, Smartphone } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "Java", "GoLang", "JavaScript", "Dart", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["Flutter", "Dart", "Cross-Platform Apps", "Material Design", "State Management", "Responsive UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Flask", "FastAPI", "REST APIs", "OOP", "Async Processing", "Modular Service Design"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Indexing", "Query Optimization", "Transactions"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Azure Functions", "Azure Blob Storage", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    icon: Cpu,
    title: "Core CS",
    skills: ["Data Structures", "Algorithms", "OOPS", "OS", "Computer Networks", "DBMS", "Concurrency"],
  },
  {
    icon: Wrench,
    title: "Software Engineering",
    skills: ["Debugging", "Performance Tuning", "API Design", "Agile", "Unit Testing", "Code Reviews"],
  },
];

// 3D tilt card component
const TiltCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="relative p-6 bg-card border border-border rounded-xl group overflow-hidden transition-colors duration-500 hover:border-primary/40 will-change-transform"
    >
      {/* Animated border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.06), transparent 40%)",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
        <motion.div
          className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
        />
      </div>

      {children}
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden" id="skills">
      {/* Multiple liquid blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl bg-primary/[0.05] -right-32 top-10"
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          y: [0, -30, 20, -10, 0],
          borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "50% 50% 60% 40%", "45% 55% 50% 50%", "40% 60% 60% 40%"],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl bg-primary/[0.04] -left-20 bottom-20"
        animate={{
          scale: [1, 0.9, 1.15, 1],
          x: [0, 20, -15, 0],
          borderRadius: ["60% 40% 40% 60%", "40% 60% 60% 40%", "55% 45% 50% 50%", "60% 40% 40% 60%"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <motion.span
            className="text-primary text-sm font-display tracking-widest uppercase inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Technical Skills</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ transformOrigin: "left" }}
          />
          <motion.p
            className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full-stack engineering across web, mobile & cloud — from system design to pixel-perfect UIs.
          </motion.p>
        </motion.div>

        {/* Highlight first row (Languages + Mobile) bigger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {skillCategories.slice(0, 2).map((cat, i) => (
            <TiltCard key={cat.title} index={i}>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500"
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <cat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">{cat.title}</h3>
                    <span className="text-xs text-dim">{cat.skills.length} technologies</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 + j * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3.5 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg border border-border hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Remaining categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.slice(2).map((cat, i) => (
            <TiltCard key={cat.title} index={i + 2}>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500"
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <cat.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (i + 2) * 0.05 + j * 0.03 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
