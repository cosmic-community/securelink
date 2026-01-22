import type { DemoMessage } from '@/types';

interface MessageBubbleProps {
  message: DemoMessage;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const { message_content, is_outgoing, timestamp, delivery_status, encryption_verified } = message.metadata;

  const statusIcons = {
    sent: '✓',
    delivered: '✓✓',
    read: '✓✓',
    failed: '⚠️',
  };

  const statusIcon = statusIcons[delivery_status?.key as keyof typeof statusIcons] || '';
  const isRead = delivery_status?.key === 'read';

  return (
    <div className={`flex ${is_outgoing ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[75%] ${
          is_outgoing
            ? 'bg-primary/20 border-primary/30'
            : 'bg-surface-light border-white/10'
        } border rounded-2xl px-4 py-3`}
      >
        <p className="text-white">{message_content}</p>
        
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
          {encryption_verified && (
            <span className="text-secondary" title="Encryption verified">🔒</span>
          )}
          <span>{timestamp}</span>
          {is_outgoing && (
            <span className={isRead ? 'text-primary' : 'text-gray-400'}>
              {statusIcon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}