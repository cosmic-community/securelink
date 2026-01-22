import { getMessages, getContacts, getAppSettings } from '@/lib/cosmic';
import ChatInterface from '@/components/ChatInterface';

export const metadata = {
  title: 'Chat - SecureLink',
  description: 'Secure encrypted messaging',
};

export default async function ChatPage() {
  const [messages, contacts, settings] = await Promise.all([
    getMessages(),
    getContacts(),
    getAppSettings(),
  ]);

  const activeContact = contacts[0] || null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <ChatInterface 
        messages={messages} 
        contact={activeContact}
        settings={settings}
      />
    </div>
  );
}