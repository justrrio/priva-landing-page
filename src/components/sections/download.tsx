"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Apple,
  Cpu,
  Mail,
  CheckCircle2,
  Loader2,
  Download as DownloadIcon,
} from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const platforms = [
  {
    name: "Windows",
    icon: Monitor,
    status: "available",
    label: "Available",
    downloadUrl: "https://github.com/justrrio/priva-landing-page/releases/download/beta/Priva_0.1.0_x64-setup.exe",
    // downloadUrl: "/Priva_0.1.0_x64-setup.exe",
  },
  {
    name: "macOS",
    icon: Apple,
    status: "planned",
    label: "Planned",
    downloadUrl: null,
  },
  {
    name: "Linux",
    icon: Cpu,
    status: "planned",
    label: "Planned",
    downloadUrl: null,
  },
];

export function Download() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Email submitted:", values.email);
    setIsSubmitting(false);
    setIsSubmitted(true);
  }

  return (
    <section className="py-24" id="download">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get <span className="gradient-text">Priva</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Download Priva for Windows and start protecting privacy in your
            videos today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          {/* Platform Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`glass rounded-xl p-6 text-center feature-card ${
                  platform.status === "available"
                    ? "ring-2 ring-primary/50"
                    : ""
                }`}
              >
                <platform.icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    platform.status === "available"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />
                <h3 className="font-semibold mb-2">{platform.name}</h3>
                {platform.status === "available" ? (
                  <Button asChild size="sm" className="mt-2">
                    <a href={platform.downloadUrl!} download>
                      <DownloadIcon className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </Button>
                ) : (
                  <Badge variant="secondary">{platform.label}</Badge>
                )}
              </motion.div>
            ))}
          </div>

          {/* Email Signup Form - for other platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-4"
              >
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-priva-green" />
                <h3 className="text-xl font-semibold mb-2">
                  Thanks for signing up!
                </h3>
                <p className="text-muted-foreground">
                  We&apos;ll notify you when macOS and Linux versions are ready.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <Mail className="w-10 h-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    Get Notified for macOS & Linux
                  </h3>
                  <p className="text-muted-foreground">
                    Enter your email to receive updates when new platforms are
                    available.
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input
                              placeholder="you@example.com"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 px-8"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        "Notify Me"
                      )}
                    </Button>
                  </form>
                </Form>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
