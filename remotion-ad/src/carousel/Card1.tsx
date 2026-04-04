import React from "react";
import { CarouselCard } from "./CarouselCard";

export const Card1: React.FC = () => (
  <CarouselCard
    cardNumber={1}
    variant="danger"
    badge="ALERTA PARA PMEs BRASILEIRAS"
    headline="Sua concorrência já usa IA."
    headlineAccent=" E você?"
    body="Enquanto sua equipe ainda faz tudo manualmente, outras empresas estão entregando o mesmo resultado em horas — não dias."
  />
);
