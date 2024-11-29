import { useState } from "react";
import { Play, Pause, SkipBack, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const GuidedMeditation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      toast.success("Iniciando meditação guiada");
    } else {
      toast.info("Meditação pausada");
    }
  };

  const handleRestart = () => {
    setIsPlaying(false);
    setProgress(0);
    toast.info("Meditação reiniciada");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-moon-glow">
          Meditação do Lobo Sábio
        </h2>
        <p className="text-forest-mist">
          Uma jornada guiada pela sabedoria ancestral dos lobos
        </p>
      </div>

      <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-moon-glow hover:text-moon-light"
            onClick={handleRestart}
          >
            <SkipBack className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-16 h-16 rounded-full bg-moon-glow/10 text-moon-glow hover:bg-moon-glow/20 hover:text-moon-light"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8" />
            )}
          </Button>
        </div>

        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm text-forest-mist">
            <span>0:00</span>
            <span>15:00</span>
          </div>
        </div>

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

      <div className="text-center text-forest-mist text-sm">
        <p>Encontre um lugar tranquilo e confortável</p>
        <p>Respire profundamente e conecte-se com seu lobo interior</p>
      </div>
    </div>
  );
};

export default GuidedMeditation;