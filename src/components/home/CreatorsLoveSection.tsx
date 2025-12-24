import { motion } from "framer-motion";
import { Heart, Shield, FileCheck, Eye, Wallet, Star } from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "100% Free to Join",
    description: "No signup fees, no hidden charges, no commission cuts from your earnings.",
  },
  {
    icon: Shield,
    title: "Payment Protection",
    description: "Secure payments through the platform. Never worry about non-payment again.",
  },
  {
    icon: FileCheck,
    title: "Clear Contracts",
    description: "Auto-generated digital contracts that protect your work and set clear expectations.",
  },
  {
    icon: Eye,
    title: "Get Discovered",
    description: "Businesses actively searching for creators in your locality find you easily.",
  },
  {
    icon: Star,
    title: "Build Your Portfolio",
    description: "Showcase your best work and grow your reputation with verified collaborations.",
  },
  {
    icon: Heart,
    title: "Work Locally",
    description: "Collaborate with businesses you can actually visit. Create authentic content.",
  },
];

export const CreatorsLoveSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-4"
          >
            <Heart className="h-4 w-4 flex-shrink-0" />
            <span>For Creators</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Why creators love LocalReach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Built for micro & nano creators who want fair deals, local brands, and zero hassle
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border"
            >
              <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
