import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  alt?: boolean;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, alt, children }: Props) => (
  <section id={id} className={alt ? "bg-section-alt" : "bg-background"}>
    <div className="container mx-auto px-4 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-serif font-bold text-primary text-center mb-12"
      >
        {title}
      </motion.h2>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
