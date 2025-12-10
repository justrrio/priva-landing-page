"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, GraduationCap, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Video,
    title: "Content Creators",
    description:
      "Protect guests' privacy in vlogs, interviews, and street content. Keep yourself visible while automatically blurring bystanders and passersby.",
    example:
      "Travel vloggers can now share authentic street footage without worrying about privacy concerns.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Secure classroom recordings and lecture videos. Protect student identities while keeping instructors visible for educational content.",
    example:
      "Universities can share lecture recordings publicly while maintaining student privacy.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Building2,
    title: "Corporate",
    description:
      "Anonymize training videos, meeting recordings, and surveillance footage. Comply with privacy regulations while maintaining useful content.",
    example:
      "HR departments can create compliant training materials from real workplace scenarios.",
    color: "from-emerald-500 to-green-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" id="use-cases">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Perfect for <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From content creators to enterprises, Priva helps protect privacy
            across all use cases.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full glass border-0 bg-card/50 feature-card overflow-hidden">
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-4`}
                  >
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm italic text-muted-foreground">
                      &ldquo;{useCase.example}&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
