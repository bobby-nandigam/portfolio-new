import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Users, Target } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-28 px-6 relative overflow-hidden" id="education">
      {/* Liquid blob */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl bg-primary/[0.04] -right-16 bottom-10"
        animate={{
          scale: [1, 1.1, 0.9, 1],
          borderRadius: ["50% 50% 60% 40%", "40% 60% 50% 50%", "60% 40% 40% 60%", "50% 50% 60% 40%"],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.span
            className="text-primary text-sm font-display tracking-widest uppercase inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Background
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-2">Education & More</h2>
          <motion.div
            className="w-20 h-[2px] bg-primary mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Degree */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="p-6 bg-card border border-border rounded-xl group hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.12)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
              <motion.div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500"
                whileHover={{ rotate: 8 }}
              >
                <GraduationCap className="w-6 h-6 text-primary" />
              </motion.div>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 bg-card border border-border rounded-xl group hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.12)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
              <motion.div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500"
                whileHover={{ rotate: 8 }}
              >
                <Award className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-display font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Microsoft – Database Fundamentals
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                NPTEL (IIT Madras) – Data Science for Engineers
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 bg-card border border-border rounded-xl group hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-border overflow-hidden">
            <motion.div className="h-full bg-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
          </div>
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500"
              whileHover={{ rotate: 8 }}
            >
              <Trophy className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="font-display font-bold text-foreground">Achievements & Community</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Trophy, text: "Top 10 Finalist at TerraHackathon for rapid prototyping and scalable solutions" },
              { icon: Users, text: "Contributed to open-source repos — backend improvements, bug fixes, performance" },
              { icon: Users, text: "Mentored junior developers on backend fundamentals & API design best practices" },
              { icon: Target, text: "Consistent algorithmic problem-solving on LeetCode — DSA proficiency" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-start gap-3 text-sm text-muted-foreground group/item"
              >
                <item.icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="group-hover/item:text-foreground transition-colors duration-300">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
