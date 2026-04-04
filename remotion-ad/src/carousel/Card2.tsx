import React from "react";
import { CarouselCard } from "./CarouselCard";

export const Card2: React.FC = () => (
  <CarouselCard
    cardNumber={2}
    variant="danger"
    badge="O CUSTO DO TRABALHO MANUAL"
    headline="Você está perdendo"
    headlineAccent=" 60% da produtividade"
    headlineAfter="."
    body="Tarefas repetitivas de atendimento, relatórios e gestão consomem mais da metade do tempo da sua equipe — e a IA já resolve tudo isso."
    stat={{ value: "-60%", label: "produtividade desperdiçada" }}
  />
);
