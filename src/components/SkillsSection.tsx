import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "Java", "GoLang", "JavaScript"],
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

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="skills">
      {/* Liquid background blob */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl bg-primary/[0.06] -right-20 top-10"
        animate={{
          scale: [1, 1.15, 0.95, 1],
          y: [0, -20, 10, 0],
          borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "50% 50% 60% 40%", "40% 60% 60% 40%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Technical Skills</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative p-6 bg-card border border-border rounded-xl group overflow-hidden transition-colors duration-500 hover:border-primary/40"
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-primary/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                    <cat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 + j * 0.03 }}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
