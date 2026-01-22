import Link from 'next/link';
import type { Screen, AppSettings } from '@/types';
import UIComponentRenderer from './UIComponentRenderer';

interface ScreenDetailProps {
  screen: Screen;
  settings: AppSettings | null;
}

export default function ScreenDetail({ screen, settings }: ScreenDetailProps) {
  const {
    screen_title,
    screen_type,
    headline,
    subheadline,
    description,
    background_image,
    icon,
    primary_action_label,
    secondary_action_label,
    show_encryption_indicator,
    ui_components,
  } = screen.metadata;

  return (
    <div className="space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        ← Back to Home
      </Link>

      <div className="card overflow-hidden">
        {background_image?.imgix_url && (
          <div className="relative h-64 -mx-6 -mt-6 mb-6">
            <img
              src={`${background_image.imgix_url}?w=1600&h=512&fit=crop&auto=format,compress`}
              alt={screen_title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
            
            {show_encryption_indicator && (
              <div className="absolute top-4 right-4 badge bg-secondary/20 text-secondary border border-secondary/30">
                🔒 {settings?.metadata?.encryption_badge_text || 'E2E Encrypted'}
              </div>
            )}
          </div>
        )}

        <div className="flex items-start gap-4 mb-6">
          {icon && <span className="text-4xl">{icon}</span>}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{screen_title}</h1>
              <span className="badge bg-surface-light text-gray-300">
                {screen_type?.value}
              </span>
            </div>
            <h2 className="text-xl text-primary">{headline}</h2>
          </div>
        </div>

        {subheadline && (
          <p className="text-gray-300 text-lg mb-6">{subheadline}</p>
        )}

        {description && (
          <div 
            className="prose prose-invert prose-sm max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}
          />
        )}

        {(primary_action_label || secondary_action_label) && (
          <div className="flex flex-wrap gap-4 mb-8">
            {primary_action_label && (
              <button className="btn-primary">{primary_action_label}</button>
            )}
            {secondary_action_label && (
              <button className="btn-secondary">{secondary_action_label}</button>
            )}
          </div>
        )}

        {ui_components && ui_components.length > 0 && (
          <div className="border-t border-white/10 pt-6">
            <h3 className="text-lg font-semibold mb-4">UI Components</h3>
            <div className="flex flex-wrap gap-3">
              {ui_components.map((component) => (
                <UIComponentRenderer key={component.id} component={component} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}