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

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SkillCard = ({ cat, index, large = false }: { cat: typeof skillCategories[0]; index: number; large?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: index * 0.06, ease }}
    className="p-6 bg-card border border-border rounded-xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
      <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
    </div>

    <div className="flex items-center gap-3 mb-5">
      <div className={`${large ? 'w-12 h-12' : 'w-10 h-10'} rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300`}>
        <cat.icon className={`${large ? 'w-6 h-6' : 'w-5 h-5'} text-primary`} />
      </div>
      <div>
        <h3 className={`font-display font-bold text-foreground ${large ? 'text-lg' : 'text-base'}`}>{cat.title}</h3>
        {large && <span className="text-xs text-dim">{cat.skills.length} technologies</span>}
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {cat.skills.map((skill) => (
        <span
          key={skill}
          className={`${large ? 'px-3.5 py-2 text-sm' : 'px-3 py-1.5 text-xs'} bg-secondary text-secondary-foreground rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-colors duration-300 cursor-default`}
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section className="py-28 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Technical Skills</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ transformOrigin: "left" }}
          />
          <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
            Full-stack engineering across web, mobile & cloud — from system design to pixel-perfect UIs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {skillCategories.slice(0, 2).map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} large />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.slice(2).map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
