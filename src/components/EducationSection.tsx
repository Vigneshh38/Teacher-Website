import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ph.D. in Computer Science & Engineering",
    year: "2021",
    institution: "B.S. Abdur Rahman Crescent Institute of Science and Technology",
    detail: "Research on RFID Reader Collision Mitigation",
  },
  {
    degree: "Master's in Computer Science & Engineering",
    year: "2007",
    institution: "Anna University",
    detail: "Percentage: 80%",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education" title="Education" alt>
    <div className="max-w-2xl mx-auto space-y-6">
      {education.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex gap-5 items-start bg-card p-6 rounded-lg border border-border shadow-sm"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <GraduationCap className="text-primary-foreground" size={22} />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg text-foreground">{e.degree}</h3>
            <p className="text-accent font-medium text-sm">{e.year} — {e.institution}</p>
            <p className="text-muted-foreground text-sm mt-1">{e.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;
