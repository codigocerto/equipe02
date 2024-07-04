import HeroSection from "@/components/hero";
import CardsSection from "@/components/cardSection";
import DiversidadeInclusao from "@/components/diversidadeInclusao";
import NossaMissao from "@/components/nossaMissao";
import Inclusoes from "@/components/inclusoes";
import EventosWorkshops from "@/components/eventosWorkshops";
import Footer from "@/components/footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <CardsSection />
      <DiversidadeInclusao />
      <NossaMissao />
      <Inclusoes />
      <EventosWorkshops />
      <Footer />
    </main>
  );
}