import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, Award, FolderOpen } from "lucide-react";

const researchData = [
  {
    icon: FolderOpen,
    label: "Projects Completed",
    value: "—",
    detail: "",
  },
  {
    icon: FlaskConical,
    label: "Ongoing Projects",
    value: "—",
    detail: "",
  },
  {
    icon: Award,
    label: "Fellowships",
    value: "—",
    detail: "",
  },
];

const ResearchPage = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <SectionWrapper id="research" title="Research Output">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Experience Section */}
          <h3 className="text-xl font-serif font-semibold text-primary mb-6">
            Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {researchData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-lg border border-border p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <item.icon className="text-primary" size={22} />
                </div>
                <h4 className="font-serif font-semibold text-foreground mb-1">
                  {item.label}
                </h4>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* PhD Guidance */}
          <h3 className="text-xl font-serif font-semibold text-primary mb-6">
            Ph.D. Guidance
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-lg border border-border p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary" size={22} />
              </div>
              <div>
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded mb-2">
                  1 Scholar
                </span>
                <h4 className="font-serif font-semibold text-foreground mb-1">
                  Novel Impact Analysis of Diabetic Retinopathy using Deep
                  Learning Approaches
                </h4>
                <p className="text-muted-foreground text-sm">
                  Ongoing Ph.D. research supervision
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </div>
    <Footer />
  </>
);

export default ResearchPage;
