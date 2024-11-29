import { useState } from "react";
import { TreeDeciduous, Globe, Book, Map, Music2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import WolfAnatomy from "@/components/knowledge/WolfAnatomy";
import WolfCulture from "@/components/knowledge/WolfCulture";
import WolfHabitat from "@/components/knowledge/WolfHabitat";

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState("biology");

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="flex items-center gap-2 mb-6 animate-fade-in">
        <TreeDeciduous className="w-8 h-8 text-forest-green" />
        <h1 className="text-3xl font-bold text-moon-glow">Árvore do Conhecimento</h1>
      </div>

      <Tabs defaultValue="biology" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 bg-transparent h-auto">
          <TabsTrigger 
            value="biology"
            className="data-[state=active]:bg-forest-green data-[state=active]:text-white"
          >
            <Globe className="mr-2 h-4 w-4" />
            Biologia e Ecologia
          </TabsTrigger>
          <TabsTrigger 
            value="culture"
            className="data-[state=active]:bg-forest-green data-[state=active]:text-white"
          >
            <Book className="mr-2 h-4 w-4" />
            Cultura e Mitos
          </TabsTrigger>
          <TabsTrigger 
            value="habitat"
            className="data-[state=active]:bg-forest-green data-[state=active]:text-white"
          >
            <Map className="mr-2 h-4 w-4" />
            Habitats e Migração
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="biology" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Biologia e Comportamento dos Lobos</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] w-full rounded-md">
                  <WolfAnatomy />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="culture" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Cultura e Mitologia</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] w-full rounded-md">
                  <WolfCulture />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="habitat" className="m-0">
            <Card>
              <CardHeader>
                <CardTitle>Mapas e Rotas de Migração</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] w-full rounded-md">
                  <WolfHabitat />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Knowledge;