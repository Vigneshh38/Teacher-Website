import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const publications = [
  "TDMA Based Reader Anti-Collision Algorithm using PSO",
  "Graph Coloring based TDMA Scheduling",
  "Naive Bayes for RFID Network Optimization",
  "Collision Mitigation Algorithms in RFID",
  "Deep Learning for Diabetic Retinopathy Analysis",
];

const ResearchSection = () => (
  <SectionWrapper id="research" title="Research & Publications">
    <div className="max-w-3xl mx-auto">
      <p className="text-center text-muted-foreground mb-8">
        Published 25+ papers in international journals and conferences.
      </p>
      <div className="space-y-4">
        {publications.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-shadow"
          >
            <FileText className="text-accent flex-shrink-0 mt-0.5" size={20} />
            <span className="text-foreground font-medium">{p}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default ResearchSection;
