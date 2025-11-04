import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      title: "Básico",
      features: [
        "Captação aérea em 4K",
        "Até 3 minutos de vídeo editado",
        "1 versão horizontal para YouTube/Web",
      ],
    },
    {
      title: "Profissional",
      features: [
        "Captação aérea em 4K com múltiplos ângulos",
        "Até 5 minutos de vídeo editado",
        "2 versões: horizontal e vertical para redes sociais",
      ],
      featured: true,
    },
    {
      title: "Premium",
      features: [
        "Captação completa em 4K com múltiplos voos",
        "Vídeo editado sem limite de tempo",
        "Múltiplas versões otimizadas para todas as plataformas",
      ],
    },
  ];

  return (
    <section id="planos" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Planos</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para o seu projeto
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 hover:shadow-glow ${
                plan.featured
                  ? "bg-primary/5 border-primary scale-105"
                  : "bg-card border-border hover:border-primary"
              }`}
            >
              <h3 className="text-3xl font-bold mb-6 text-center">
                {plan.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full ${plan.featured ? "shadow-glow" : ""}`}
                variant={plan.featured ? "default" : "secondary"}
              >
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar orçamento
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
