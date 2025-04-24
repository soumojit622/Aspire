import BackgroundSpots from "@/components/landing/BackgroundSpots";
import CustomizationSection from "@/components/landing/CustomizationSection";
import DashboardMockupSection from "@/components/landing/DashboardMockupSection";
import FAQ from "@/components/landing/FAQ";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import MobileFriendly from "@/components/landing/MobileFriendly";
import NewsletterCTA from "@/components/landing/NewsletterCTA";
import PricingPlans from "@/components/landing/PricingPlans";
import RealTimeSync from "@/components/landing/RealTimeSync";
import TeamCollaboration from "@/components/landing/TeamCollaboration";
import Testimonials from "@/components/landing/Testimonials";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <BackgroundSpots />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <DashboardMockupSection />
      <CustomizationSection />
      <TeamCollaboration />
      <RealTimeSync />
      <MobileFriendly />
      <PricingPlans />
      <Testimonials />
      <FAQ />
      <NewsletterCTA />
    </main>
  );
};

export default LandingPage;
