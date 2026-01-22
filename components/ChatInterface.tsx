import type { DemoMessage, DemoContact, AppSettings } from '@/types';
import MessageBubble from './MessageBubble';

interface ChatInterfaceProps {
  messages: DemoMessage[];
  contact: DemoContact | null;
  settings: AppSettings | null;
}

export default function ChatInterface({ messages, contact, settings }: ChatInterfaceProps) {
  if (!contact) {
    return (
      <div className="card text-center py-12">
        <p className="text-gray-400">Select a contact to start chatting</p>
      </div>
    );
  }

  const sortedMessages = [...messages].sort((a, b) => {
    const timeA = a.metadata?.timestamp || '';
    const timeB = b.metadata?.timestamp || '';
    return timeA.localeCompare(timeB);
  });

  return (
    <div className="card p-0 overflow-hidden">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          {contact.metadata?.avatar?.imgix_url ? (
            <img
              src={`${contact.metadata.avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
              alt={contact.metadata.display_name}
              width={48}
              height={48}
              className="rounded-full"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-surface-light flex items-center justify-center text-xl">
              👤
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">{contact.metadata?.display_name}</h2>
              {contact.metadata?.verification_status?.key === 'verified' && (
                <span className="text-sm">✅</span>
              )}
            </div>
            <p className="text-sm text-gray-400">{contact.metadata?.online_status?.value}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="badge bg-secondary/20 text-secondary text-xs">
            🔒 {settings?.metadata?.encryption_badge_text || 'E2E Encrypted'}
          </div>
          <button className="p-2 hover:bg-surface-light rounded-lg transition-colors" title="Voice Call">
            📞
          </button>
          <button className="p-2 hover:bg-surface-light rounded-lg transition-colors" title="Video Call">
            📹
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background/50">
        {sortedMessages.length === 0 ? (
          <div className="text-center text-gray-400 py-8">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          sortedMessages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a secure message..."
            className="flex-1 bg-surface-light px-4 py-3 rounded-xl border border-white/10 focus:border-primary/50 focus:outline-none transition-colors"
          />
          <button className="btn-primary px-4">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}