import { motion } from "framer-motion";
import { Check, Percent, Crown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const BusinessModelSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Pay only when you close a deal. No upfront costs, no hidden fees.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-md"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Percent className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Standard</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">20%</span>
              <span className="text-muted-foreground"> commission</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Per successful deal. No monthly fees, no signup costs.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Access to all creators",
                "Digital contracts",
                "Secure messaging",
                "Basic analytics",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-3 bg-muted rounded-lg text-sm">
              <span className="text-muted-foreground">Example: ₹10,000 deal →</span>
              <span className="font-semibold text-foreground"> ₹12,000 total</span>
            </div>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-primary/5 rounded-2xl p-8 border-2 border-primary shadow-lg relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-full whitespace-nowrap">
              Most Popular
            </div>
            <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4">
              <Crown className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Pro</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">5%</span>
              <span className="text-muted-foreground"> commission</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Lower commission for businesses running regular campaigns.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Everything in Standard",
                "Priority creator matching",
                "Advanced analytics",
                "Dedicated support",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-3 bg-primary/10 rounded-lg text-sm">
              <span className="text-muted-foreground">Example: ₹10,000 deal →</span>
              <span className="font-semibold text-foreground"> ₹10,500 total</span>
            </div>
          </motion.div>

          {/* Creators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-md"
          >
            <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">For Creators</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-foreground">Free</span>
              <span className="text-muted-foreground"> forever</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Creators never pay. Get discovered, get paid, get protected.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "No signup fees",
                "No commission cuts",
                "Payment protection",
                "Digital contracts",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="accent" className="w-full" asChild>
              <Link to="/for-creators">Join as Creator</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
