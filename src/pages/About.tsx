import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Shield,
  Globe,
  Heart,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Hyperlocal First",
    description: "We believe the best marketing is local. A creator in Koramangala drives more footfall to a Koramangala café than a celebrity in Mumbai.",
  },
  {
    icon: Users,
    title: "Empowering SMBs",
    description: "Small businesses are the backbone of India. We're building tools that help them compete with bigger brands.",
  },
  {
    icon: Shield,
    title: "Fair & Transparent",
    description: "No hidden fees, no complicated contracts. Creators keep 100% of their earnings. Businesses pay only when they close deals.",
  },
  {
    icon: Heart,
    title: "Creator-Friendly",
    description: "We protect creators from non-payment and unclear expectations. Your work deserves respect and fair compensation.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Making local influence accessible
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              LocalReach India is building the infrastructure for hyperlocal influencer 
              marketing—connecting small businesses with creators in their exact neighbourhood.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground m-0">The Problem We're Solving</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most influencer platforms focus on celebrities and mega-influencers. They're built 
                for D2C brands with big budgets, not for the café owner in Indiranagar or the 
                boutique in Bandra.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When a salon in Lokhandwala wants to promote a new treatment, they don't need 
                an influencer with 500K followers across India. They need someone whose audience 
                actually lives in Lokhandwala and might walk in for an appointment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                That's the gap LocalReach fills. We help local businesses find micro and nano 
                creators (1,000–10,000 followers) in their exact city, locality, or PIN code.
              </p>

              <div className="flex items-center gap-3 mb-6 mt-12">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground m-0">India First, Global Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We're starting in India because we understand the market deeply. The local café 
                culture, the neighbourhood salons, the cloud kitchens, the boutique stores—these 
                businesses need solutions built for their reality. But the model works anywhere 
                local businesses exist, and that's everywhere.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What we believe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built with conviction
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                LocalReach is a founder-led product, built with a deep understanding of 
                India's local business ecosystem and creator economy.
              </p>
              <div className="p-6 bg-secondary/30 rounded-2xl inline-block">
                <p className="text-sm text-muted-foreground">
                  Questions? Ideas? Feedback?
                </p>
                <a
                  href="mailto:hello@localreach.in"
                  className="text-primary font-medium hover:underline"
                >
                  hello@localreach.in
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the movement
          </h2>
          <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
            Whether you're a local business or a creator, LocalReach is here to help you grow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="xl" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/for-businesses">
                Find Creators
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
              <Link to="/for-creators">Join as Creator</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
