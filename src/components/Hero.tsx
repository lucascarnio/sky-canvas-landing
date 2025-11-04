import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-city-sunset.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Users can replace the source with their drone video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={heroImage}
      >
        <source src="/your-drone-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback Image if video doesn't load */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Captação profissional de{" "}
          <span className="text-gradient">imagens aéreas</span> por drones
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in">
          Vídeos e fotos em alta qualidade
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" asChild className="shadow-glow">
            <a href="#planos">Solicite um orçamento</a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#portfolio">Ver portfólio</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-primary" size={32} />
      </a>
    </section>
  );
};

export default Hero;
