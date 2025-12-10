"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Scan,
  UserCheck,
  Camera,
  Activity,
  Layers,
  WifiOff,
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "AI Face Detection",
    description:
      "Powered by YOLOv8-Face model for accurate, real-time face detection in any video content.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: UserCheck,
    title: "Selective Recognition",
    description:
      "FaceNet-powered recognition keeps enrolled faces visible while blurring unknown individuals.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Camera,
    title: "Multi-Pose Enrollment",
    description:
      "KYC-style face enrollment captures multiple angles for accurate recognition in any scenario.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Activity,
    title: "Real-Time Tracking",
    description:
      "SORT algorithm maintains consistent face tracking throughout your entire video timeline.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Layers,
    title: "Multiple Blur Effects",
    description:
      "Choose from Gaussian, Pixelate, Box blur, or Motion blur to match your content style.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: WifiOff,
    title: "Offline Processing",
    description:
      "All processing happens locally on your device. Your videos never leave your computer.",
    color: "from-amber-500 to-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powerful Features for{" "}
            <span className="gradient-text">Privacy Protection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Built with cutting-edge AI technology to give you complete control
            over privacy in your videos.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="feature-card h-full glass border-0 bg-card/50">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
