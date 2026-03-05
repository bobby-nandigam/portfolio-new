import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Cpu, Wrench, Smartphone } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "Java", "GoLang", "JavaScript", "Dart", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    skills: ["Flutter", "Dart", "Cross-Platform", "Material Design", "State Management"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Flask", "FastAPI", "REST APIs", "Async Processing", "Microservices"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Indexing", "Query Optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["Azure Functions", "Azure Blob", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    icon: Cpu,
    title: "Core CS",
    skills: ["Data Structures", "Algorithms", "OS", "Networks", "DBMS", "Concurrency"],
  },
  {
    icon: Wrench,
    title: "Engineering",
    skills: ["System Design", "API Design", "Testing", "Code Reviews", "Agile"],
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SkillsSection = () => {
  return (
    <section className="py-32 px-6 md:px-12" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6 mb-20"
        >
          <span className="font-mono text-sm text-primary mt-2 shrink-0">01</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Technical Stack</h2>
            <p className="text-muted-foreground mt-3 max-w-md text-sm">
              Full-stack across web, mobile & cloud — from system design to shipped products.
            </p>
          </div>
        </motion.div>

        {/* Skills grid - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-card p-6 group hover:bg-secondary/50 transition-colors duration-300 ${i === 0 ? 'md:col-span-2 md:row-span-1' : ''}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <cat.icon className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground text-sm">{cat.title}</h3>
                </div>
                <span className="font-mono text-[10px] text-dim">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs text-dim font-mono bg-background rounded border border-border hover:border-primary/30 hover:text-primary transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
