import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  TrendingUp,
  Users,
  FileCheck,
  Percent,
  Crown,
  ArrowRight,
  Coffee,
  Scissors,
  Utensils,
  ShoppingBag,
  Check,
} from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Hyperlocal Reach",
    description: "Find creators whose followers actually live in your neighbourhood. Real local influence, not vanity metrics.",
  },
  {
    icon: TrendingUp,
    title: "Drive Footfall",
    description: "Turn online content into offline customers. Perfect for cafés, salons, gyms, and retail stores.",
  },
  {
    icon: Users,
    title: "Authentic Connections",
    description: "Micro-creators with 1K-10K followers have higher engagement and more trust with their audience.",
  },
  {
    icon: FileCheck,
    title: "Simple Contracts",
    description: "Auto-generated digital contracts that protect both parties. No legal headaches.",
  },
];

const examples = [
  {
    icon: Coffee,
    business: "Specialty Café",
    location: "Indiranagar, Bengaluru",
    scenario: "Weekend brunch promotion with 4 local food bloggers",
    result: "50+ new customers over 2 weekends",
  },
  {
    icon: Scissors,
    business: "Beauty Salon",
    location: "Lokhandwala, Mumbai",
    scenario: "New hair treatment launch with 3 beauty creators",
    result: "Fully booked for 2 weeks",
  },
  {
    icon: Utensils,
    business: "Cloud Kitchen",
    location: "HSR Layout, Bengaluru",
    scenario: "Menu launch with neighbourhood food influencers",
    result: "200% increase in first-week orders",
  },
  {
    icon: ShoppingBag,
    business: "Ethnic Boutique",
    location: "Lajpat Nagar, Delhi",
    scenario: "Festive collection shoot with fashion creators",
    result: "Sold out within 10 days",
  },
];

const ForBusinesses = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container-wide relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <TrendingUp className="h-4 w-4" />
              <span>For Local Businesses</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Turn local creators into your best marketing channel
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Find micro-influencers in your exact locality—Noida, Delhi, Koramangala, Andheri 
              or anywhere in India. Drive real footfall, not just impressions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="xl">
                Start Discovering Creators
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why hyperlocal influencers work
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              For local businesses, relevance beats reach every time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real scenarios, real impact
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              See how businesses like yours are using LocalReach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <example.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{example.business}</h3>
                    <p className="text-sm text-primary">{example.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{example.scenario}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  {example.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent fee structure
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Pay only when you close a deal. No monthly fees, no signup costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
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
                <span className="text-muted-foreground"> commission/deal</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Perfect for businesses just getting started.
              </p>
              <div className="p-3 bg-muted rounded-lg text-sm">
                <span className="text-muted-foreground">Example: ₹10,000 deal →</span>
                <span className="font-semibold text-foreground"> ₹12,000 total</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary/5 rounded-2xl p-8 border-2 border-primary shadow-lg relative"
            >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-full whitespace-nowrap">
              Recommended
            </div>
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                <Crown className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">5%</span>
                <span className="text-muted-foreground"> commission</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                For businesses running regular campaigns. Big savings on every deal.
              </p>
              <div className="p-3 bg-primary/10 rounded-lg text-sm">
                <span className="text-muted-foreground">Example: ₹10,000 deal →</span>
                <span className="font-semibold text-foreground"> ₹10,500 total</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to find local creators?
          </h2>
          <p className="text-base sm:text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Start discovering creators in your city. No signup fees, pay only when you close a deal.
          </p>
          <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
            Start Discovering Creators
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForBusinesses;
