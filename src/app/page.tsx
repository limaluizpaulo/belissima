import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Beneficios from "@/components/beneficios/Beneficios";
import Produtos from "@/components/produtos/Produtos";
import Sobre from "@/components/sobre/sobre";
import Contato from "@/components/contato/Contato";
import Footer from "@/components/footer/footer";
import Clientes from "@/components/clientes/Clientes";
import Countdown from "@/components/countdown/Countdown";
import EventInfo from "@/components/eventInfo/EventInfo";
import EventDetails from "@/components/eventDetails/EventDetails";
import MainSection from "@/components/mainSection/mainSection";
import Tecnicos from "@/components/tecnicos/tecnicos";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 
  
    
      <Produtos />
    <Beneficios />
        <Hero />
         <Contato />
     */}
      <Header />

      <MainSection />
      <Sobre />
      <EventInfo />

      <Clientes />
       <Tecnicos />
      <EventDetails />
       
      <Countdown />
      <Footer />
      {/*         
     
  
   
      
     
    
     */}
    </main>
  );
}
