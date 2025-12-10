"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cog, 
  Atom, 
  Monitor, 
  Cpu, 
  ScanFace, 
  UserCheck 
} from "lucide-react";

const technologies = [
  {
    name: "Rust",
    description: "High-performance backend",
    icon: Cog,
    color: "text-orange-500",
  },
  {
    name: "React",
    description: "Modern UI framework",
    icon: Atom,
    color: "text-cyan-500",
  },
  {
    name: "Tauri",
    description: "Native desktop apps",
    icon: Monitor,
    color: "text-yellow-500",
  },
  {
    name: "ONNX Runtime",
    description: "ML inference engine",
    icon: Cpu,
    color: "text-blue-500",
  },
  {
    name: "YOLOv8",
    description: "Face detection model",
    icon: ScanFace,
    color: "text-purple-500",
  },
  {
    name: "FaceNet",
    description: "Face recognition model",
    icon: UserCheck,
    color: "text-green-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30" id="tech-stack">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built with{" "}
            <span className="gradient-text">Cutting-Edge Technology</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Powered by industry-leading frameworks and AI models for the best
            performance and reliability.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="glass rounded-xl p-6 text-center feature-card group cursor-pointer">
                <div className={`mb-4 flex justify-center transition-colors duration-300 group-hover:${tech.color}`}>
                  <tech.icon className={`w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300`} />
                </div>
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
