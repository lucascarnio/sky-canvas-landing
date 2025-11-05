import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Entre em Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Phone/WhatsApp */}
          <a
            href="https://wa.me/5516982213496"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card hover:bg-card/80 p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 text-center"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Telefone/WhatsApp</h3>
            <p className="text-muted-foreground">(16) 98221-3496</p>
          </a>

          {/* Email */}
          <a
            href="mailto:lucas.pisa@gmail.com"
            className="group bg-card hover:bg-card/80 p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 text-center"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">E-mail</h3>
            <p className="text-muted-foreground break-all">lucas.pisa@gmail.com</p>
          </a>

          {/* Location */}
          <div className="group bg-card hover:bg-card/80 p-8 rounded-xl border border-border hover:border-primary transition-all duration-300 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="text-primary" size={32} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Localização</h3>
            <p className="text-muted-foreground">Ribeirão Preto - SP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
