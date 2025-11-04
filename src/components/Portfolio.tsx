import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: portfolio1, alt: "Resort de luxo - Vista aérea", aspect: "landscape" },
    { src: portfolio2, alt: "Arquitetura moderna", aspect: "portrait" },
    { src: portfolio3, alt: "Estrada costeira", aspect: "landscape" },
    { src: portfolio4, alt: "Piscina infinita", aspect: "portrait" },
    { src: portfolio5, alt: "Construção comercial", aspect: "landscape" },
    { src: portfolio6, alt: "Área agrícola", aspect: "landscape" },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Clique nas imagens para ampliar e ver de perto alguns de nossos trabalhos!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* First portrait image - spans 2 rows */}
          <div
            className="md:row-span-2 cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(images[1].src)}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* First landscape image - spans 2 columns */}
          <div
            className="md:col-span-2 cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(images[0].src)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* Second portrait image - spans 2 rows */}
          <div
            className="md:row-span-2 cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(images[3].src)}
          >
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* Second landscape image - spans 2 columns */}
          <div
            className="md:col-span-2 cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(images[2].src)}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* Third landscape image - spans 2 columns */}
          <div
            className="md:col-span-2 cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(images[4].src)}
          >
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          </div>

          {/* Fourth landscape image - spans 2 columns */}
          <div
            className="md:col-span-2 cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(images[5].src)}
          >
            <img
              src={images[5].src}
              alt={images[5].alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] p-4 bg-background/95 backdrop-blur border border-border">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 text-foreground hover:text-primary transition-colors bg-background/80 rounded-full p-2"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
