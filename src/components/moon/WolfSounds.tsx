import { useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

const sounds = [
  {
    id: "wolf-howl",
    title: "Uivo Solitário",
    description: "Um lobo solitário uivando para a lua cheia",
    duration: "0:45",
    source: "#"
  },
  {
    id: "pack-howl",
    title: "Uivo da Matilha",
    description: "Uma matilha inteira em comunicação noturna",
    duration: "1:20",
    source: "#"
  },
  {
    id: "forest-night",
    title: "Noite na Floresta",
    description: "Sons noturnos da floresta com uivos distantes",
    duration: "2:30",
    source: "#"
  }
];

const WolfSounds = () => {
  const [playing, setPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState(80);

  const handlePlay = (soundId: string) => {
    if (playing === soundId) {
      setPlaying(null);
      toast.info("Som pausado");
    } else {
      setPlaying(soundId);
      toast.success("Reproduzindo som");
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-moon-glow">
          Biblioteca de Sons
        </h2>
        <div className="flex items-center gap-4">
          <Volume2 className="w-5 h-5" />
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-32"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {sounds.map((sound) => (
          <div
            key={sound.id}
            className="flex items-center justify-between p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
          >
            <div className="flex-1">
              <h3 className="font-medium text-moon-light">{sound.title}</h3>
              <p className="text-sm text-forest-mist">{sound.description}</p>
              <span className="text-xs text-forest-mist mt-1">{sound.duration}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-moon-glow hover:text-moon-light"
              onClick={() => handlePlay(sound.id)}
            >
              {playing === sound.id ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6" />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WolfSounds;