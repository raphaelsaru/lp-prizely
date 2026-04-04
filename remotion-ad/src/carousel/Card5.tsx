import React from "react";
import { CarouselCard } from "./CarouselCard";

export const Card5: React.FC = () => (
  <CarouselCard
    cardNumber={5}
    variant="cta"
    badge="SEM RISCO · SEM COMPROMISSO"
    headline="Diagnóstico"
    headlineAccent=" gratuito."
    body="Em 30 minutos, você descobre exatamente onde a IA pode transformar sua empresa — com resultados mensuráveis desde o primeiro dia."
    cta="Agende agora →"
  />
);
