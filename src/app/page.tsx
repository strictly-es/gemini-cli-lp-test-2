import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Problems from "@/components/Problems";
import ServiceBenefit from "@/components/ServiceBenefit";
import Features from "@/components/Features";
import Cta from "@/components/Cta";
import CaseStudies from "@/components/CaseStudies";
import ProcessFlow from "@/components/ProcessFlow";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyLogos />
      <Problems />
      <ServiceBenefit />
      <Features />
      <Cta />
      <CaseStudies />
      <ProcessFlow />
      <Faq />
      <Contact />
    </main>
  );
}
