import { useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const WolfAnatomy = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const anatomyParts = [
    {
      id: "head",
      title: "Cabeça e Sentidos",
      description: "Os lobos possuem um olfato 100 vezes mais sensível que o dos humanos e podem ouvir sons a até 10km de distância.",
      position: "top-1/4 left-1/4"
    },
    {
      id: "body",
      title: "Corpo e Pelagem",
      description: "A pelagem dupla dos lobos os protege em temperaturas de até -40°C.",
      position: "top-1/2 left-1/2"
    },
    {
      id: "legs",
      title: "Patas",
      description: "Adaptadas para longas caminhadas e corridas, podem percorrer até 60km por dia.",
      position: "bottom-1/4 left-1/2"
    }
  ];

  return (
    <div className="relative w-full h-full p-4">
      <div className="relative w-full aspect-square bg-forest-dark rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000" 
          alt="Wolf Anatomy"
          className="w-full h-full object-cover opacity-50"
        />
        
        {anatomyParts.map((part) => (
          <HoverCard key={part.id}>
            <HoverCardTrigger asChild>
              <button
                className={`absolute ${part.position} w-8 h-8 rounded-full bg-moon-glow/50 
                           hover:bg-moon-glow transition-all duration-300 cursor-pointer
                           ${selectedPart === part.id ? 'ring-2 ring-moon-light' : ''}`}
                onClick={() => setSelectedPart(part.id)}
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-forest-dark/95 border-forest-green text-white">
              <h3 className="font-bold text-moon-glow mb-2">{part.title}</h3>
              <p>{part.description}</p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default WolfAnatomy;