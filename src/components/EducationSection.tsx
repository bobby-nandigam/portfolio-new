import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Users, Target } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const achievements = [
  { icon: Trophy, text: "Top 10 Finalist — TerraHackathon" },
  { icon: Users, text: "Open-source contributor — backend & performance" },
  { icon: Users, text: "Mentored junior devs on API design" },
  { icon: Target, text: "Active LeetCode problem solver" },
];

const EducationSection = () => {
  return (
    <section className="py-32 px-6 md:px-12" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-6 mb-20"
        >
          <span className="font-mono text-sm text-primary mt-2 shrink-0">04</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Education</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden mb-6">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card p-6 md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <div>
                <h3 className="font-display font-bold text-foreground">B.Tech — Computer Science</h3>
                <p className="text-xs text-dim">NBKR Institute of Science & Technology</p>
              </div>
            </div>
            <div className="flex items-center gap-4 font-mono text-xs text-dim">
              <span>2020 – 2024</span>
              <span className="text-primary font-semibold">CGPA 8.5/10</span>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-card p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-primary" />
              <h3 className="font-display font-semibold text-foreground text-sm">Certifications</h3>
            </div>
            <ul className="space-y-2">
              <li className="text-xs text-dim flex items-start gap-2">
                <span className="text-primary/40 shrink-0">—</span>
                Microsoft — Database Fundamentals
              </li>
              <li className="text-xs text-dim flex items-start gap-2">
                <span className="text-primary/40 shrink-0">—</span>
                NPTEL (IIT Madras) — Data Science
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h3 className="font-display font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-primary" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {achievements.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs text-dim group/item">
                <item.icon className="w-3.5 h-3.5 text-primary/60 shrink-0" />
                <span className="group-hover/item:text-foreground transition-colors duration-200">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
