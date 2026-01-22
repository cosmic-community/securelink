import Link from 'next/link';
import type { Screen } from '@/types';

interface ScreenShowcaseProps {
  screens: Screen[];
}

export default function ScreenShowcase({ screens }: ScreenShowcaseProps) {
  if (screens.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">App Screens</h2>
        <p className="text-gray-400">Explore the complete SecureLink experience</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screens.map((screen) => (
          <Link
            key={screen.id}
            href={`/screens/${screen.slug}`}
            className="card group hover:border-primary/30 transition-all duration-300"
          >
            {screen.metadata?.background_image?.imgix_url && (
              <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
                <img
                  src={`${screen.metadata.background_image.imgix_url}?w=800&h=320&fit=crop&auto=format,compress`}
                  alt={screen.metadata.screen_title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
            )}

            <div className="flex items-start gap-3">
              {screen.metadata?.icon && (
                <span className="text-2xl">{screen.metadata.icon}</span>
              )}
              <div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {screen.metadata?.screen_title || screen.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {screen.metadata?.screen_type?.value || 'Screen'}
                </p>
              </div>
            </div>

            {screen.metadata?.headline && (
              <p className="mt-3 text-gray-300 text-sm line-clamp-2">
                {screen.metadata.headline}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}