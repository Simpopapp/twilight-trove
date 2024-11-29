import { useState } from "react";
import { Footprints, Target, PawPrint, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { GameCard } from "@/components/games/GameCard";

const Pegadas = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameSelect = (game: string) => {
    toast.info("Em breve!", {
      description: "Este jogo estará disponível na próxima atualização.",
    });
    setSelectedGame(game);
  };

  const games = [
    {
      id: "survival",
      title: "Sobrevivência da Matilha",
      description: "Guie sua matilha através de desafios ecológicos, como busca por alimento e proteção dos filhotes.",
      icon: PawPrint,
      color: "bg-amber-500",
    },
    {
      id: "tracks",
      title: "Rastros na Neve",
      description: "Identifique pegadas de diferentes animais e descubra suas histórias na natureza.",
      icon: Footprints,
      color: "bg-sky-500",
    },
    {
      id: "legends",
      title: "Caçador de Lendas",
      description: "Teste seus conhecimentos sobre mitos e fatos dos lobos ao redor do mundo.",
      icon: Target,
      color: "bg-purple-500",
    },
    {
      id: "daily",
      title: "Desafios Diários",
      description: "Complete missões especiais e ganhe recompensas exclusivas.",
      icon: Trophy,
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="flex items-center gap-2 mb-6 animate-fade-in">
        <Footprints className="w-8 h-8 text-forest-green" />
        <h1 className="text-3xl font-bold text-moon-glow">Pegadas</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onSelect={() => handleGameSelect(game.id)}
          />
        ))}
      </div>

      {selectedGame && (
        <Card className="mt-8 animate-fade-in">
          <CardHeader>
            <CardTitle>Progresso do Jogo</CardTitle>
            <CardDescription>
              Acompanhe seu desenvolvimento neste desafio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <Button onClick={() => setSelectedGame(null)}>
                Voltar aos Jogos
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Pegadas;