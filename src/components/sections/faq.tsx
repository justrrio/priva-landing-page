"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does face enrollment work?",
    answer:
      "Priva uses a KYC-style multi-pose enrollment process. You'll capture your face from multiple angles using your webcam - front, left, right, and tilted positions. This creates a comprehensive face signature that ensures accurate recognition in your videos, even when faces appear at different angles.",
  },
  {
    question: "Is my data stored online?",
    answer:
      "No, absolutely not. Priva processes everything locally on your device. Your face data, enrolled faces, and videos never leave your computer. We don't collect any personal data, and there's no cloud component. Your privacy is truly protected.",
  },
  {
    question: "What video formats are supported?",
    answer:
      "Priva supports all major video formats including MP4, MOV, AVI, MKV, WebM, and more. We use FFmpeg under the hood, which means virtually any video format can be processed. Audio tracks are preserved in the output.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Priva requires Windows 10 or later with at least 8GB RAM. For optimal performance, we recommend 16GB RAM and a dedicated GPU (NVIDIA with CUDA support provides the best acceleration). Processing speed depends on video length and resolution.",
  },
  {
    question: "Can I choose different blur effects?",
    answer:
      "Yes! Priva offers multiple blur styles: Gaussian (smooth, natural blur), Pixelate (mosaic effect), Box blur (simple averaging), and Motion blur (directional blur). You can preview each effect before processing and adjust the intensity level.",
  },
  {
    question: "How accurate is the face recognition?",
    answer:
      "Priva uses FaceNet, one of the most accurate face recognition models available. With proper multi-pose enrollment, recognition accuracy typically exceeds 99%. The system also uses SORT tracking to maintain consistency throughout the video, reducing false positives.",
  },
  {
    question: "When will macOS and Linux versions be available?",
    answer:
      "We're currently focused on perfecting the Windows version. macOS support is planned for Q2 2025, with Linux following in Q3 2025. Sign up for our newsletter to get notified when these versions become available.",
  },
  {
    question: "Is Priva open source?",
    answer:
      "Priva is built on an open architecture using open-source AI models (YOLOv8-Face, FaceNet). While the application itself is not fully open source, we're committed to transparency in our AI processing. We may open-source components in the future.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30" id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know about Priva and how it protects your
            privacy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-0"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
