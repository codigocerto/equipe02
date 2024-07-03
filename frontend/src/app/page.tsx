import HeroSection from "@/components/Hero";
import CardsSection from "@/components/CardSection";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CardsSection />
    </main>
  );
}
