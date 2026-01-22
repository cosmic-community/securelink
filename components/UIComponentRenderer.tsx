import type { UIComponent } from '@/types';

interface UIComponentRendererProps {
  component: UIComponent;
}

export default function UIComponentRenderer({ component }: UIComponentRendererProps) {
  const { component_type, label, icon_emoji, accent_color, is_active_state, tooltip_text } = component.metadata;

  const baseStyles = {
    borderColor: accent_color || '#00D9FF',
  };

  switch (component_type?.key) {
    case 'button':
      return (
        <button
          className="px-4 py-2 rounded-xl border transition-all hover:opacity-80"
          style={baseStyles}
          title={tooltip_text || label}
        >
          {icon_emoji && <span className="mr-2">{icon_emoji}</span>}
          {label}
        </button>
      );

    case 'icon_button':
      return (
        <button
          className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${
            accent_color === '#FF4757' ? 'bg-danger' : 'bg-surface-light hover:bg-surface'
          }`}
          title={tooltip_text || label}
        >
          {icon_emoji || '•'}
        </button>
      );

    case 'toggle':
      return (
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
            is_active_state ? 'bg-primary/20' : 'bg-surface-light'
          }`}
          style={is_active_state ? baseStyles : undefined}
          title={tooltip_text || label}
        >
          {icon_emoji && <span>{icon_emoji}</span>}
          <span>{label}</span>
          <span className={`w-8 h-4 rounded-full relative ${is_active_state ? 'bg-primary' : 'bg-gray-600'}`}>
            <span
              className={`absolute w-3 h-3 rounded-full bg-white top-0.5 transition-all ${
                is_active_state ? 'right-0.5' : 'left-0.5'
              }`}
            />
          </span>
        </button>
      );

    case 'badge':
      return (
        <span
          className="badge border"
          style={{ 
            backgroundColor: `${accent_color}20`,
            color: accent_color,
            borderColor: `${accent_color}50`,
          }}
          title={tooltip_text || label}
        >
          {icon_emoji && <span>{icon_emoji}</span>}
          {label}
        </span>
      );

    case 'indicator':
      return (
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
          style={{ 
            backgroundColor: `${accent_color}20`,
            color: accent_color,
          }}
          title={tooltip_text || label}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accent_color }} />
          {icon_emoji && <span>{icon_emoji}</span>}
          {label}
        </div>
      );

    case 'card':
      return (
        <div className="card" title={tooltip_text || label}>
          {icon_emoji && <span className="text-2xl mb-2">{icon_emoji}</span>}
          <p className="font-medium">{label}</p>
        </div>
      );

    default:
      return (
        <span className="text-gray-400">
          {icon_emoji} {label}
        </span>
      );
  }
}