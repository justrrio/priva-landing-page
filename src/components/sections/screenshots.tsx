"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
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
import { Shield, Users, Layers, Eye, Camera, Settings } from "lucide-react";

const screenshots = [
  {
    title: "Face Enrollment",
    description: "Multi-pose capture for accurate recognition",
    icon: Camera,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Video Editor",
    description: "Professional editing workspace with timeline",
    icon: Layers,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Face Library",
    description: "Manage enrolled faces and permissions",
    icon: Users,
    gradient: "from-pink-500/20 to-orange-500/20",
  },
  {
    title: "Blur Preview",
    description: "Real-time preview of blur effects",
    icon: Eye,
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    title: "Privacy Settings",
    description: "Customize blur intensity and effects",
    icon: Settings,
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "Protected Export",
    description: "Export with all privacy settings applied",
    icon: Shield,
    gradient: "from-teal-500/20 to-blue-500/20",
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
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="cursor-pointer"
                      >
                        <div className="glass rounded-xl p-4 h-full feature-card">
                          <div
                            className={`aspect-video rounded-lg bg-gradient-to-br ${screenshot.gradient} flex items-center justify-center mb-4`}
                          >
                            <screenshot.icon className="w-12 h-12 text-foreground/50" />
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
                    <DialogContent className="max-w-4xl">
                      <div
                        className={`aspect-video rounded-lg bg-gradient-to-br ${screenshot.gradient} flex items-center justify-center`}
                      >
                        <div className="text-center">
                          <screenshot.icon className="w-20 h-20 mx-auto mb-4 text-foreground/50" />
                          <h3 className="text-xl font-semibold mb-2">
                            {screenshot.title}
                          </h3>
                          <p className="text-muted-foreground">
                            Screenshot coming soon
                          </p>
                        </div>
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
