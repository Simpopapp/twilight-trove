import { Home, TreeDeciduous, Footprints, Moon, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleIconClick = (section: string) => {
    toast(`${section} section coming soon!`, {
      description: "This feature will be available in the next update.",
    });
  };

  const icons = [
    {
      name: "Toca",
      Icon: Home,
      position: "bottom-20 left-20",
    },
    {
      name: "Árvore do Conhecimento",
      Icon: TreeDeciduous,
      position: "top-1/3 left-1/3",
    },
    {
      name: "Pegadas",
      Icon: Footprints,
      position: "bottom-32 right-1/3",
    },
    {
      name: "Lua",
      Icon: Moon,
      position: "top-20 right-20",
    },
    {
      name: "Membros da Matilha",
      Icon: Users,
      position: "top-1/2 right-1/4",
    },
  ];

  return (
    <div className="relative min-h-screen forest-background">
      <div className="absolute inset-0 bg-forest-dark/40 backdrop-blur-[2px]" />
      
      <div className="relative z-10 w-full min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-center pt-10 text-white/90 animate-fade-in">
          Portal da Matilha
        </h1>

        {icons.map(({ name, Icon, position }) => (
          <div
            key={name}
            className={`absolute ${position} animate-fade-in`}
            onMouseEnter={() => setHoveredIcon(name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div 
              className="portal-icon icon-button"
              onClick={() => handleIconClick(name)}
            >
              <Icon 
                size={32} 
                className={`${
                  hoveredIcon === name ? "text-moon-light animate-glow" : "text-white"
                }`}
              />
            </div>
            
            {hoveredIcon === name && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 
                            px-3 py-1 bg-black/60 rounded-lg text-white text-sm
                            whitespace-nowrap animate-fade-in">
                {name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;