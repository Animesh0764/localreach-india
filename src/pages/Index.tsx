import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { BusinessModelSection } from "@/components/home/BusinessModelSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { CreatorsLoveSection } from "@/components/home/CreatorsLoveSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <UseCasesSection />
      <BusinessModelSection />
      <CreatorsLoveSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
