import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const WolfHabitat = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);

  const habitats = [
    {
      species: "Lobo Cinzento",
      regions: ["América do Norte", "Europa", "Ásia"],
      description: "A espécie mais comum, adaptada a diversos habitats desde florestas até tundra.",
      migration: "Podem percorrer até 1000km em busca de novos territórios.",
      challenge: "desafio-lobo-cinzento"
    },
    {
      species: "Lobo do Ártico",
      regions: ["Groenlândia", "Canadá Ártico"],
      description: "Especializado em sobreviver em condições extremamente frias.",
      migration: "Seguem as migrações dos caribus no ártico.",
      challenge: "desafio-lobo-artico"
    }
  ];

  const unlockChallenge = (challenge: string) => {
    toast.success("Novo desafio desbloqueado em Pegadas!", {
      description: "Continue explorando para descobrir mais.",
    });
  };

  return (
    <div className="grid gap-6">
      {habitats.map((habitat, index) => (
        <Card 
          key={index}
          className="bg-forest-dark/50 border-forest-green cursor-pointer hover:bg-forest-dark/70 transition-all"
          onClick={() => {
            setSelectedSpecies(habitat.species);
            unlockChallenge(habitat.challenge);
          }}
        >
          <CardHeader>
            <CardTitle className="text-moon-glow">{habitat.species}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2"><strong>Regiões:</strong> {habitat.regions.join(", ")}</p>
            <p className="mb-2">{habitat.description}</p>
            <p><strong>Padrão de Migração:</strong> {habitat.migration}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WolfHabitat;