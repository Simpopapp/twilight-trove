import { useState } from "react";
import { Play, Pause, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const tales = [
  {
    id: "tale-1",
    title: "O Primeiro Uivo",
    culture: "Lenda Nativa Americana",
    description: "A história de como o primeiro lobo aprendeu a uivar para a lua.",
    duration: "8 min"
  },
  {
    id: "tale-2",
    title: "A Dança dos Espíritos",
    culture: "Mitologia Nórdica",
    description: "Uma história sobre lobos guardiões das auroras boreais.",
    duration: "12 min"
  },
  {
    id: "tale-3",
    title: "O Lobo e as Estrelas",
    culture: "Conto Siberiano",
    description: "Como os lobos ajudaram a criar as constelações do céu noturno.",
    duration: "10 min"
  }
];

const MoonTales = () => {
  const [playingTale, setPlayingTale] = useState<string | null>(null);

  const handlePlay = (taleId: string) => {
    if (playingTale === taleId) {
      setPlayingTale(null);
      toast.info("História pausada");
    } else {
      setPlayingTale(taleId);
      toast.success("Iniciando história");
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-moon-glow">
          Contos da Lua
        </h2>
        <p className="text-forest-mist">
          Histórias ancestrais narradas sob o luar
        </p>
      </div>

      <div className="grid gap-6">
        {tales.map((tale) => (
          <Card key={tale.id} className="bg-black/20 backdrop-blur-sm border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-moon-light">{tale.title}</CardTitle>
                  <p className="text-sm text-forest-mist">{tale.culture}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-moon-glow hover:text-moon-light"
                  onClick={() => handlePlay(tale.id)}
                >
                  {playingTale === tale.id ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-forest-mist mb-2">{tale.description}</p>
              <div className="flex items-center gap-2 text-sm text-forest-mist">
                <BookOpen className="w-4 h-4" />
                <span>{tale.duration}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MoonTales;