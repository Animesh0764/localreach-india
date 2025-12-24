import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Search,
  Send,
  MessageSquare,
  FileCheck,
  Handshake,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover Creators",
    description: "Search by city, locality, or PIN code. Filter by niche (food, fashion, fitness), follower count, and engagement rates.",
    forBusiness: true,
  },
  {
    icon: Send,
    number: "02",
    title: "Send Collaboration Request",
    description: "Share your campaign brief, budget, and expectations. Creators can see your business profile and past collaborations.",
    forBusiness: true,
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Negotiate Terms",
    description: "Chat within the platform to finalize deliverables, timeline, and compensation. All communication is logged.",
    forBusiness: false,
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Accept & Sign Contract",
    description: "Once terms are agreed, an auto-generated digital contract is created. Both parties sign electronically.",
    forBusiness: false,
  },
  {
    icon: Handshake,
    number: "05",
    title: "Collaborate & Create",
    description: "Work together on the campaign. Contact details are revealed only after the contract is signed.",
    forBusiness: false,
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Track & Complete",
    description: "Monitor deliverables, approve content, and complete payment securely through the platform.",
    forBusiness: true,
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              How LocalReach Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8"
            >
              A simple, transparent process that protects both businesses and creators. 
              From discovery to collaboration, we've got you covered.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/for-businesses">
                  I'm a Business
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/for-creators">I'm a Creator</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-border md:left-8" />
                )}
                
                <div className="flex gap-6 mb-12 md:gap-8">
                  {/* Icon */}
                  <div className="relative">
                    <div className="h-12 w-12 md:h-16 md:w-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-background shadow-md">
                      <step.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built on trust & transparency
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Every step is designed to protect both parties
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Private Until Deal",
                  description: "Contact details are only shared after both parties accept the collaboration.",
                },
                {
                  title: "Digital Contracts",
                  description: "Auto-generated contracts spell out deliverables, timelines, and payment terms.",
                },
                {
                  title: "Secure Payments",
                  description: "All payments flow through the platform, ensuring creators always get paid.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border text-center"
                >
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Join LocalReach today and start connecting with your local community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto" asChild>
              <Link to="/for-businesses">
                Find Creators
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-background/20 text-background hover:bg-background/10 w-full sm:w-auto" asChild>
              <Link to="/for-creators">Join as Creator</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
