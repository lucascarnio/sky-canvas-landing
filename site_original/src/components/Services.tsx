import { Video, Scissors, Share2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="w-12 h-12" />,
      title: "Captação aérea 4K",
      description: "Imagens estáveis, de alta qualidade e em diversos ângulos do seu negócio",
    },
    {
      icon: <Scissors className="w-12 h-12" />,
      title: "Edição cinematográfica",
      description: "Edição de cores e cenas, impactando ainda mais seus anúncios",
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Conteúdo para redes",
      description: "Versões vertical e horizontal nativos, cortes curtos, thumbnails e legendas",
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
