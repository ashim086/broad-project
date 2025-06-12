import Header from "../../components/landing/header";
import HeroSection from "../../components/landing/heroSection";
import SecondPage from "../../components/landing/secondPage";
import SupplementOfferPage from "@/components/landing/ThirdPage";
import FourthPage from "@/components/landing/FourthPage";
import Fifth from "@/components/landing/Fifth";

export default function Landing() {
  return (
    <div className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll lg:scroll-smooth">
      <section className="snap-start h-screen">
        <Header />
        <HeroSection />
      </section>
      <section className="snap-start h-screen">
        <SecondPage />
      </section>
      <section className="snap-start h-screen">
        <SupplementOfferPage />
      </section>
      <section className="snap-start h-screen">
        <FourthPage />
      </section>
      <section className="snap-start h-screen">
        <Fifth />
      </section>
    </div>
  );
}

