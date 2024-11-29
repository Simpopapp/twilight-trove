import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

const WolfVision = () => {
  const [nightVision, setNightVision] = useState(false);

  const handleToggleVision = () => {
    setNightVision(!nightVision);
    toast.success(
      nightVision 
        ? "Voltando para visão humana" 
        : "Ativando visão noturna do lobo"
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-moon-glow mb-2">
          Visão do Lobo
        </h2>
        <p className="text-forest-mist">
          Experimente como os lobos enxergam o mundo
        </p>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000"
          alt="Forest Scene"
          className={`w-full h-full object-cover transition-all duration-500
            ${nightVision ? "grayscale brightness-150 contrast-125" : ""}`}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
              ${nightVision ? "opacity-50" : "opacity-0"} transition-opacity duration-500`}
          />
          <div 
            className={`absolute inset-0 bg-[#304030] mix-blend-multiply
              ${nightVision ? "opacity-40" : "opacity-0"} transition-opacity duration-500`}
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          {nightVision ? (
            <Eye className="w-5 h-5 text-moon-glow" />
          ) : (
            <EyeOff className="w-5 h-5 text-forest-mist" />
          )}
          <span className="text-sm">Visão Noturna</span>
        </div>
        <Switch
          checked={nightVision}
          onCheckedChange={handleToggleVision}
        />
      </div>

      <div className="text-center text-sm text-forest-mist space-y-2">
        <p>Os lobos possuem uma visão noturna excepcional</p>
        <p>Eles enxergam cerca de 5 vezes melhor que humanos no escuro</p>
        <p>Sua visão é otimizada para detectar movimento</p>
      </div>
    </div>
  );
};

export default WolfVision;