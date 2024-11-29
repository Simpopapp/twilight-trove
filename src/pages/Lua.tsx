import { Moon, Music2, BookOpen, Eye } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import WolfSounds from "@/components/moon/WolfSounds";
import GuidedMeditation from "@/components/moon/GuidedMeditation";
import MoonTales from "@/components/moon/MoonTales";
import WolfVision from "@/components/moon/WolfVision";

const Lua = () => {
  const [activeTab, setActiveTab] = useState("sounds");

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-bold text-moon-glow mb-8 animate-fade-in">
        Lua - Experiência Sensorial
      </h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TabsTrigger value="sounds" className="gap-2">
            <Music2 className="w-4 h-4" />
            Uivos e Sons
          </TabsTrigger>
          <TabsTrigger value="meditation" className="gap-2">
            <Moon className="w-4 h-4" />
            Meditação Guiada
          </TabsTrigger>
          <TabsTrigger value="tales" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Contos da Lua
          </TabsTrigger>
          <TabsTrigger value="vision" className="gap-2">
            <Eye className="w-4 h-4" />
            Visão do Lobo
          </TabsTrigger>
        </TabsList>

        <Card className="p-6 bg-forest-dark/50 border-forest-green">
          <TabsContent value="sounds" className="mt-0">
            <WolfSounds />
          </TabsContent>
          <TabsContent value="meditation" className="mt-0">
            <GuidedMeditation />
          </TabsContent>
          <TabsContent value="tales" className="mt-0">
            <MoonTales />
          </TabsContent>
          <TabsContent value="vision" className="mt-0">
            <WolfVision />
          </TabsContent>
        </Card>
      </Tabs>
    </div>
  );
};

export default Lua;