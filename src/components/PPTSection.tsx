import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Download, Eye, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  { icon: Download, label: "Download Research PPT", desc: "Access research presentation slides." },
  { icon: Eye, label: "View Conference Presentation", desc: "Browse conference talk materials." },
  { icon: BookOpen, label: "Classroom Lecture Slides", desc: "Teaching resources and lecture decks." },
];

const PPTSection = () => (
  <SectionWrapper id="ppt" title="PPT Resources">
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {resources.map((r, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="bg-card rounded-lg border border-border p-6 text-center flex flex-col items-center"
        >
          <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
            <r.icon className="text-primary" size={24} />
          </div>
          <h3 className="font-serif font-semibold text-foreground mb-2">{r.label}</h3>
          <p className="text-muted-foreground text-sm mb-5">{r.desc}</p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
            {r.label}
          </Button>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PPTSection;
