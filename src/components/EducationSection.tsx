import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Users, Target } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const EducationSection = () => {
  return (
    <section className="py-28 px-6" id="education">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <span className="text-primary text-sm font-display tracking-widest uppercase">Background</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Education & More</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="p-6 bg-card border border-border rounded-xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
              <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground">B.Tech – Computer Science</h3>
                <p className="text-sm text-muted-foreground">NBKR Institute of Science & Technology</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-dim">2020 – 2024</span>
              <span className="font-display font-bold text-primary px-3 py-1 bg-primary/10 rounded-md">CGPA: 8.5/10</span>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="p-6 bg-card border border-border rounded-xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
              <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Microsoft – Database Fundamentals
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                NPTEL (IIT Madras) – Data Science for Engineers
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="p-6 bg-card border border-border rounded-xl group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
            <div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground">Achievements & Community</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Trophy, text: "Top 10 Finalist at TerraHackathon for rapid prototyping and scalable solutions" },
              { icon: Users, text: "Contributed to open-source repos — backend improvements, bug fixes, performance" },
              { icon: Users, text: "Mentored junior developers on backend fundamentals & API design best practices" },
              { icon: Target, text: "Consistent algorithmic problem-solving on LeetCode — DSA proficiency" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground group/item"
              >
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="group-hover/item:text-foreground transition-colors duration-300">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
