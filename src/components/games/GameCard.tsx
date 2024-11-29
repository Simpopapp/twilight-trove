import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface GameProps {
  game: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
  };
  onSelect: () => void;
}

export const GameCard = ({ game, onSelect }: GameProps) => {
  const Icon = game.icon;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer"
          onClick={onSelect}>
      <CardHeader className={`${game.color} text-white`}>
        <div className="flex items-center gap-2">
          <Icon className="w-6 h-6" />
          <CardTitle>{game.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-base">
          {game.description}
        </CardDescription>
        <Button 
          variant="outline" 
          className="mt-4 w-full"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          Jogar Agora
        </Button>
      </CardContent>
    </Card>
  );
};