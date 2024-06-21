import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Beneficios from "@/components/beneficios/Beneficios";
import Produtos from "@/components/produtos/Produtos";
import Sobre from "@/components/sobre/sobre";
import Contato from "@/components/contato/Contato";

/* Para criar uma landing page baseada na identidade visual do site da Garden Hair Cosméticos e com o objetivo de captar leads para uma vendedora, podemos estruturar a página com as seguintes seções e elementos:
1. Header com Chamada Atraente

    Logo da Garden Hair Cosméticos: Mantenha o logo no topo para reforçar a identidade visual.
    Chamada Principal: Algo como "Transforme Seu Cabelo com Produtos de Alta Qualidade" ou "Descubra os Segredos para um Cabelo Deslumbrante".
    Subtítulo: Uma breve descrição sobre a qualidade dos produtos e o diferencial da marca.

2. Formulário de Captura de Leads

    Título: "Quer Saber Mais? Entre em Contato Conosco!"
    Campos do Formulário: Nome, E-mail, Telefone, Interesse (Shampoos, Condicionadores, Tratamentos, etc.).
    Botão de Envio: "Quero Saber Mais!" ou "Envie-me as Ofertas!"

3. Benefícios dos Produtos

    Imagens dos Produtos: Fotos de alta qualidade dos produtos mais populares.
    Lista de Benefícios: Destacar os principais benefícios, como ingredientes naturais, resultados comprovados, etc.
    Testemunhos: Citações de clientes satisfeitos com fotos e avaliações.

4. Ofertas Exclusivas

    Título: "Ofertas Exclusivas Para Você"
    Descrição das Ofertas: Descontos especiais, brindes na primeira compra, pacotes promocionais.
    Botão de Ação: "Aproveitar Oferta"

5. Sobre a Vendedora

    Foto e Nome da Vendedora: Foto profissional e o nome da vendedora.
    Descrição: Breve descrição sobre a experiência e expertise dela.
    Contato Direto: WhatsApp, e-mail ou link para redes sociais.

6. Demonstração de Produtos

    Vídeo ou Galeria de Imagens: Vídeos curtos mostrando o uso dos produtos ou uma galeria de antes e depois.
    Descrição: Detalhes sobre como cada produto deve ser usado para obter melhores resultados.

7. Call to Action (CTA) Final

    Reforço da Chamada: Reiterar a importância de se inscrever para receber ofertas e novidades.
    Botão de Ação: "Não Perca Mais Tempo!" ou "Garanta Suas Ofertas!"

8. Footer

    Links Úteis: Política de Privacidade, Termos de Uso, Contato.
    Redes Sociais: Ícones com links para as redes sociais da Garden Hair Cosméticos.
    Informações de Contato: Endereço, telefone e e-mail.

Estilo e Design

    Cores e Tipografia: Utilizar as cores predominantes do site original, como tons de verde e marrom, e a mesma tipografia para manter a consistência visual.
    Imagens de Alta Qualidade: Fotografias e gráficos que refletem a identidade visual da marca.
    Layout Responsivo: Garantir que a página seja visualmente atraente e funcional em dispositivos móveis.

Essa estrutura ajudará a captar leads de forma eficaz, alinhada com a identidade visual da Garden Hair Cosméticos. */

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Beneficios />
      <Produtos />
      <Sobre />
        <Contato />
       </main>
  );
}
