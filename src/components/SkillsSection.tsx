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
    <section className="py-24 px-6" id="skills">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-md border border-border"
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
