import { motion } from "framer-motion";
import { Coffee, Scissors, ShoppingBag, Utensils, Dumbbell, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Coffee,
    title: "Cafés & Restaurants",
    location: "Koramangala, Bengaluru",
    description: "A specialty coffee shop increased weekday footfall by 40% through collaborations with 5 local food creators.",
  },
  {
    icon: Scissors,
    title: "Salons & Spas",
    location: "Bandra, Mumbai",
    description: "A boutique salon booked out their new treatment launch week through 3 beauty micro-influencers.",
  },
  {
    icon: ShoppingBag,
    title: "Boutiques & Stores",
    location: "Khan Market, Delhi",
    description: "A fashion boutique sold out their festive collection with help from local fashion creators.",
  },
  {
    icon: Utensils,
    title: "Cloud Kitchens",
    location: "Andheri, Mumbai",
    description: "A home kitchen brand grew their delivery radius by partnering with neighbourhood foodies.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Studios",
    location: "Jubilee Hills, Hyderabad",
    description: "A yoga studio filled their morning batches by collaborating with wellness micro-influencers.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    location: "Sector 29, Noida",
    description: "A real estate firm generated quality leads through local lifestyle creators.",
  },
];

export const UseCasesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Real businesses. Real results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            See how local businesses across India are growing with hyperlocal influencer marketing
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">{useCase.location}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
