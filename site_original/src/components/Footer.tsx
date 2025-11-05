const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">A</span>
          </div>
          <span className="text-xl font-bold text-gradient">AirVid</span>
        </div>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} AirVid. Captação profissional de imagens aéreas por drones.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
