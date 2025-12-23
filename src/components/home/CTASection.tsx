import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Store, Camera } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to grow with local creators?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-background/70 mb-10 max-w-2xl mx-auto"
          >
            Join hundreds of businesses and creators across India who are building 
            authentic, hyperlocal connections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto"
          >
            <Link
              to="/for-businesses"
              className="group p-6 bg-background/10 rounded-2xl border border-background/20 hover:bg-background/15 transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-4 mx-auto">
                <Store className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">I'm a Business</h3>
              <p className="text-background/70 text-sm mb-4">
                Find creators in your locality
              </p>
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                Get Started <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              to="/for-creators"
              className="group p-6 bg-background/10 rounded-2xl border border-background/20 hover:bg-background/15 transition-all hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4 mx-auto">
                <Camera className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">I'm a Creator</h3>
              <p className="text-background/70 text-sm mb-4">
                Get discovered by local brands
              </p>
              <span className="inline-flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                Join Free <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
