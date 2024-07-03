import HeroSection from "@/components/hero";
import CardsSection from "@/components/cardSection";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CardsSection />
    </main>
  );
}
