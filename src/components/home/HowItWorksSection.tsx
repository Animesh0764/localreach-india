import { motion } from "framer-motion";
import { Search, Send, FileText, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description: "Search creators by city, locality, or PIN code. Filter by niche, follower count, and engagement.",
  },
  {
    icon: Send,
    title: "Connect",
    description: "Send a collaboration request with your campaign details, budget, and expectations.",
  },
  {
    icon: FileText,
    title: "Contract",
    description: "Accept terms and get an auto-generated digital contract. No paperwork, no hassle.",
  },
  {
    icon: Handshake,
    title: "Collaborate",
    description: "Work together, track deliverables, and pay securely through the platform.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            How LocalReach Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Four simple steps to connect with local creators and grow your business
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-6 border border-border shadow-sm card-hover"
            >
              {/* Step number */}
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                {index + 1}
              </div>
              
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
