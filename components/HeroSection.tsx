import type { AppSettings } from '@/types';

interface HeroSectionProps {
  settings: AppSettings;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const { app_name, tagline, privacy_statement, primary_color, app_logo } = settings.metadata;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          {app_logo?.imgix_url && (
            <div className="mb-8">
              <img
                src={`${app_logo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
                alt={app_name}
                width={120}
                height={120}
                className="mx-auto rounded-2xl shadow-glow-primary"
              />
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{app_name}</span>
          </h1>
          
          <p 
            className="text-2xl md:text-3xl font-light mb-8"
            style={{ color: primary_color }}
          >
            {tagline}
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {privacy_statement}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg">
              🔑 Generate New Key
            </button>
            <button className="btn-secondary text-lg">
              📥 Import Existing Key
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}