"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const screenshots = [
  {
    title: "Video Editor",
    description: "Professional editing workspace with timeline and preview",
    image: "/priva-1.jpg",
  },
  {
    title: "Face Library",
    description: "Manage enrolled faces and recognition settings",
    image: "/priva-2.jpg",
  },
  {
    title: "Face Enrollment",
    description: "Multi-pose capture for accurate recognition",
    image: "/priva-3.jpg",
  },
  {
    title: "Blur Preview",
    description: "Real-time preview of blur effects applied",
    image: "/priva-4.jpg",
  },
];

export function Screenshots() {
  const containerRef = useRef(null);

  return (
    <section className="py-24 bg-muted/30" id="screenshots">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See <span className="gradient-text">Priva in Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore the intuitive interface designed for seamless privacy
            protection.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {screenshots.map((screenshot, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer"
                      >
                        <div className="glass rounded-xl p-3 h-full feature-card">
                          <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-3 relative">
                            <Image
                              src={screenshot.image}
                              alt={screenshot.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          <h3 className="font-semibold mb-1">
                            {screenshot.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {screenshot.description}
                          </p>
                        </div>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl p-2">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={screenshot.image}
                          alt={screenshot.title}
                          fill
                          className="object-contain rounded-lg"
                          sizes="100vw"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
