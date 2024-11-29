import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const wolfTypes = [
  { id: "alfa", name: "Alfa", description: "Líder natural, determinado e protetor", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400" },
  { id: "explorador", name: "Explorador", description: "Curioso, aventureiro e adaptável", image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400" },
  { id: "guardiao", name: "Guardião", description: "Leal, vigilante e dedicado", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400" },
];

const themes = [
  { id: "floresta", name: "Floresta" },
  { id: "tundra", name: "Tundra" },
  { id: "montanhas", name: "Montanhas" },
];

const languages = [
  { id: "pt", name: "Português" },
  { id: "en", name: "English" },
  { id: "es", name: "Español" },
];

const Toca = () => {
  const [selectedWolf, setSelectedWolf] = useState(wolfTypes[0].id);
  const [selectedTheme, setSelectedTheme] = useState(themes[0].id);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].id);

  const currentWolf = wolfTypes.find((wolf) => wolf.id === selectedWolf);

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <h1 className="text-3xl font-bold text-moon-light mb-8">Toca - Seu Espaço Pessoal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Avatar Selection */}
        <Card className="bg-forest-dark/50 border-forest-mist/20">
          <CardHeader>
            <CardTitle className="text-moon-glow">Escolha seu Avatar Lobo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={currentWolf?.image} />
                <AvatarFallback className="bg-forest-green">{currentWolf?.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <Select value={selectedWolf} onValueChange={setSelectedWolf}>
                  <SelectTrigger className="w-[180px] bg-forest-dark/50">
                    <SelectValue placeholder="Escolha seu tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {wolfTypes.map((wolf) => (
                      <SelectItem key={wolf.id} value={wolf.id}>
                        {wolf.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="mt-2 text-sm text-forest-mist">{currentWolf?.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Theme and Language */}
        <Card className="bg-forest-dark/50 border-forest-mist/20">
          <CardHeader>
            <CardTitle className="text-moon-glow">Personalização</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">Tema</Label>
              <Select value={selectedTheme} onValueChange={setSelectedTheme}>
                <SelectTrigger className="w-full bg-forest-dark/50">
                  <SelectValue placeholder="Escolha o tema" />
                </SelectTrigger>
                <SelectContent>
                  {themes.map((theme) => (
                    <SelectItem key={theme.id} value={theme.id}>
                      {theme.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Idioma</Label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-full bg-forest-dark/50">
                  <SelectValue placeholder="Escolha o idioma" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem key={lang.id} value={lang.id}>
                      {lang.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Exploration Diary */}
        <Card className="md:col-span-2 bg-forest-dark/50 border-forest-mist/20">
          <CardHeader>
            <CardTitle className="text-moon-glow">Diário de Exploração</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-forest-dark/30 rounded-lg p-4">
              <p className="text-forest-mist text-center italic">
                Seu diário de exploração está vazio. Comece sua jornada explorando o Portal da Matilha!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Toca;