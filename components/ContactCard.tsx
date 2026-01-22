import type { DemoContact } from '@/types';

interface ContactCardProps {
  contact: DemoContact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { display_name, public_key_preview, avatar, online_status, verification_status, last_seen, trust_level } = contact.metadata;

  const statusColors = {
    online: 'bg-secondary',
    offline: 'bg-gray-500',
    away: 'bg-yellow-500',
  };

  const statusColor = statusColors[online_status?.key as keyof typeof statusColors] || 'bg-gray-500';

  return (
    <div className="card flex items-center gap-4 hover:border-primary/30 transition-colors cursor-pointer">
      <div className="relative">
        {avatar?.imgix_url ? (
          <img
            src={`${avatar.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={display_name}
            width={56}
            height={56}
            className="rounded-full"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-surface-light flex items-center justify-center text-2xl">
            👤
          </div>
        )}
        <span className={`absolute bottom-0 right-0 w-4 h-4 ${statusColor} rounded-full border-2 border-surface`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold truncate">{display_name}</h3>
          {verification_status?.key === 'verified' && (
            <span className="text-primary" title="Verified">✅</span>
          )}
        </div>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          <span className="font-mono text-xs bg-surface-light px-2 py-0.5 rounded">
            {public_key_preview}
          </span>
          {last_seen && (
            <span>• {last_seen}</span>
          )}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {trust_level && (
          <div className="flex items-center gap-1" title={`Trust Level: ${trust_level}/5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i < trust_level ? 'bg-secondary' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        )}
        <button className="p-2 hover:bg-surface-light rounded-lg transition-colors">
          📞
        </button>
        <button className="p-2 hover:bg-surface-light rounded-lg transition-colors">
          💬
        </button>
      </div>
    </div>
  );
}