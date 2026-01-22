import type { AppSettings } from '@/types';

interface SecurityFeaturesProps {
  settings: AppSettings;
}

export default function SecurityFeatures({ settings }: SecurityFeaturesProps) {
  const features = settings.metadata.security_features;

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Security First</h2>
        <p className="text-gray-400">Built from the ground up with privacy in mind</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="card hover:border-primary/30 transition-colors">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}