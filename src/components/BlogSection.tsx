import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Rss, Shield, Wifi, Presentation, FlaskConical } from "lucide-react";

const posts = [
  { icon: FlaskConical, title: "Research Articles", desc: "Latest findings and publications in RFID and Deep Learning." },
  { icon: Rss, title: "Technical Insights", desc: "In-depth technical analysis and tutorials." },
  { icon: Shield, title: "Cyber Security Updates", desc: "Current trends and best practices in cybersecurity." },
  { icon: Wifi, title: "IoT Trends", desc: "Emerging innovations in Internet of Things." },
  { icon: Presentation, title: "Conference Experiences", desc: "Highlights and takeaways from academic conferences." },
];

const BlogSection = () => (
  <SectionWrapper id="blog" title="Blog" alt>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {posts.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <p.icon className="text-primary mb-4 group-hover:text-accent transition-colors" size={28} />
          <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{p.title}</h3>
          <p className="text-muted-foreground text-sm">{p.desc}</p>
          <span className="inline-block mt-4 text-xs font-semibold text-accent">Coming Soon →</span>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default BlogSection;
