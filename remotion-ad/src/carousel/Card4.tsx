import React from "react";
import { CarouselCard } from "./CarouselCard";

export const Card4: React.FC = () => (
  <CarouselCard
    cardNumber={4}
    variant="proof"
    badge="SEUS CONCORRENTES JÁ CHEGARAM LÁ"
    headline="50+ empresas geraram"
    headlineAccent=" 320% de ROI"
    headlineAfter=" com a Prizely."
    body="Cada semana que passa sem IA é receita que fica na mesa — e espaço de mercado que a concorrência está ocupando agora."
  />
);
