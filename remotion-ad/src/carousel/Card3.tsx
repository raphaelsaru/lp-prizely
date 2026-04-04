import React from "react";
import { CarouselCard } from "./CarouselCard";

export const Card3: React.FC = () => (
  <CarouselCard
    cardNumber={3}
    variant="default"
    badge="A DIFERENÇA É ABSURDA"
    headline=""
    headlineAccent="10x mais rápido."
    headlineAfter=""
    body="Com Claude Code e automação de IA, equipes entregam o mesmo trabalho em 1/10 do tempo. Sem contratar mais ninguém. Sem complexidade técnica."
    stat={{ value: "10x", label: "mais velocidade com Claude Code" }}
  />
);
