import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { BookOpen, Shield, Wifi, Brain } from "lucide-react";

const areas = [
  { icon: Wifi, label: "Computer Networks & RFID" },
  { icon: Shield, label: "Cyber Security" },
  { icon: Brain, label: "Deep Learning" },
  { icon: BookOpen, label: "IoT Applications" },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-muted-foreground text-lg leading-relaxed mb-10 text-center"
      >
        Dr. C. Hema is an academician and researcher with more than 16 years of experience in Computer Science and Engineering. Her research focus includes Computer Networks, RFID, IoT, Cyber Security, and Deep Learning applications. She has published more than 25 international journal and conference papers and serves as a reviewer for multiple Scopus-indexed journals.
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {areas.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center p-5 rounded-lg bg-card border border-border shadow-sm"
          >
            <a.icon className="text-accent mb-3" size={32} />
            <span className="text-sm font-semibold text-foreground">{a.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
