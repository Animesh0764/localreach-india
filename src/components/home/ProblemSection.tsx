import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Why global platforms don't work for local businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground"
          >
            Most influencer platforms focus on reach over relevance. 
            But for a café in Koramangala or a salon in Bandra, local influence matters more.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Problems with global platforms */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-md"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Global Platforms</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Influencers with followers across India, not in your city",
                "High minimum campaign budgets (₹50,000+)",
                "Focus on celebrities and mega-influencers",
                "Complex contracts and negotiations",
                "No way to verify local credibility",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="h-3 w-3 text-destructive" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LocalReach solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">LocalReach India</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Creators with followers in your exact PIN code",
                "Flexible budgets starting from ₹2,000",
                "Focus on micro & nano creators (1K-10K)",
                "Simple digital contracts, no lawyers needed",
                "Verified local engagement metrics",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
