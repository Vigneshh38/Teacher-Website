import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-primary/80" />
    <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center gap-10 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-shrink-0"
      >
        <img
          src={profilePhoto}
          alt="Dr. C. Hema"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-foreground/40 shadow-2xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
          Dr. C. Hema
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 font-medium mb-1">
          Assistant Professor (Selection Grade)
        </p>
        <p className="text-primary-foreground/75 mb-6 max-w-xl">
          Department of Computer Science &amp; Engineering
          <br />
          B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-primary-foreground/80 text-sm">
          <span className="flex items-center gap-2">
            <Mail size={16} /> hemac@crescent.education
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} /> +91 7397463890
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Chennai, India
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
