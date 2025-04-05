interface HeroSectionProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
  }
  
  export default function HeroSection({ backgroundImage, title, subtitle }: HeroSectionProps) {
    return (
      <section
        className="relative flex items-center justify-center h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${backgroundImage}')`,
        }}
      >
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold">{title}</h1>
          <p className="text-white mt-2 text-lg">{subtitle}</p>
        </div>
      </section>
    );
  }
  