import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Wallet,
  Eye,
  Star,
  FileCheck,
  ArrowRight,
  Check,
  Instagram,
  Youtube,
  Smartphone,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "100% Free Forever",
    description: "No signup fees. No commission cuts. You keep every rupee you earn from collaborations.",
  },
  {
    icon: Shield,
    title: "Payment Protection",
    description: "Secure payments through the platform. Never worry about non-payment from brands again.",
  },
  {
    icon: FileCheck,
    title: "Clear Digital Contracts",
    description: "Auto-generated contracts that protect your work and set clear expectations before you start.",
  },
  {
    icon: Eye,
    title: "Get Discovered Locally",
    description: "Businesses actively searching for creators in your city find you easily. No cold outreach needed.",
  },
  {
    icon: Star,
    title: "Build Your Portfolio",
    description: "Showcase your best work and grow your reputation with verified brand collaborations.",
  },
  {
    icon: Heart,
    title: "Work With Local Brands",
    description: "Collaborate with businesses you can actually visit. Create authentic content that resonates.",
  },
];

const platforms = [
  { icon: Instagram, name: "Instagram Reels" },
  { icon: Youtube, name: "YouTube Shorts" },
  { icon: Smartphone, name: "Josh & Moj" },
];

const ForCreators = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/10 to-background py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            >
              <Heart className="h-4 w-4" />
              <span>For Creators</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Get discovered by brands in your city
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Join LocalReach for free. Connect with local cafés, salons, boutiques, and 
              more. No payment cuts, no hidden fees—just real brand collaborations.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="accent" size="xl">
                List Yourself for Free
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-8 sm:py-12 bg-secondary/30 border-y border-border">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            <span className="text-muted-foreground font-medium text-center">Create on any platform</span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground">
                  <platform.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why creators choose LocalReach
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for micro & nano creators who want fair deals and local opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it protects */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your work is protected
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                We've built in safeguards so you can focus on creating
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Contact details stay private",
                  description: "Your phone and email are revealed only after a deal is accepted. No spam, no cold calls.",
                },
                {
                  title: "Clear expectations upfront",
                  description: "Every collaboration starts with a digital contract that spells out deliverables and payment.",
                },
                {
                  title: "Secure payment flow",
                  description: "Payments go through the platform. You get paid for the work you do, every time.",
                },
                {
                  title: "Verified businesses",
                  description: "Businesses on LocalReach are verified. Work with brands you can trust.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
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
            Ready to work with local brands?
          </h2>
          <p className="text-base sm:text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Join hundreds of creators across India. Free forever, no hidden fees.
          </p>
          <Button size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
            List Yourself for Free
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForCreators;
