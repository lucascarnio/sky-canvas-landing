import { Camera, Film, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      text: "Captação em até 4K com drones de alta performance",
    },
    {
      icon: <Film className="w-6 h-6" />,
      text: "Versões otimizadas para redes - imagens na vertical e horizontal",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "Diversos modos de voo e edição para finalização do seu projeto",
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">nós</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em vídeos e fotos aéreas utilizando drones de última geração.
            Transformamos a percepção do seu negócio com imagens precisas e de alta qualidade,
            elevando o destaque do seu anúncio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <p className="text-foreground/90">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
