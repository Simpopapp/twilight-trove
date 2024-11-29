import { useState } from "react";
import { Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WolfCulture = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const cultures = [
    {
      region: "Nórdica",
      title: "Fenrir e os Deuses",
      story: "Na mitologia nórdica, Fenrir era um lobo gigante, filho de Loki, tão poderoso que os deuses o acorrentaram temendo que ele trouxesse o Ragnarök.",
      audio: "#"
    },
    {
      region: "Indígena",
      title: "O Espírito do Lobo",
      story: "Para muitas tribos indígenas norte-americanas, o lobo é um professor espiritual e guia, simbolizando lealdade, perseverança e sabedoria.",
      audio: "#"
    },
    {
      region: "Asiática",
      title: "O Lobo Azul",
      story: "Na cultura mongol, acredita-se que o povo mongol descendeu de um lobo azul, simbolizando força e união com a natureza.",
      audio: "#"
    }
  ];

  return (
    <div className="grid gap-6">
      {cultures.map((culture, index) => (
        <Card key={index} className="bg-forest-dark/50 border-forest-green">
          <CardHeader>
            <CardTitle className="text-moon-glow">{culture.region}: {culture.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{culture.story}</p>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Music2 className="w-4 h-4" />
              {isPlaying ? "Pausar Narração" : "Ouvir Narração"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WolfCulture;