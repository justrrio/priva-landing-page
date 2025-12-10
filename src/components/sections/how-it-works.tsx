"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Upload, Cpu, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Enroll Your Face",
    description:
      "Use your webcam to capture your face from multiple angles. Our KYC-style enrollment ensures accurate recognition.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Import Video",
    description:
      "Drag and drop any video file into Priva. We support all major formats including MP4, MOV, AVI, and MKV.",
  },
  {
    number: "03",
    icon: Cpu,
    title: "AI Analyzes & Tracks",
    description:
      "Our AI detects and tracks every face, comparing them against your enrolled faces in real-time.",
  },
  {
    number: "04",
    icon: Download,
    title: "Export Protected Video",
    description:
      "Download your processed video with blur effects applied. All unknown faces are automatically obscured.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Protect privacy in your videos with just four simple steps.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <div className="space-y-8 relative">
            {/* Connecting line */}
            <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 relative"
              >
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.15 + 0.2,
                      type: "spring",
                    }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="glass rounded-xl p-6 feature-card">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-bold text-primary">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
