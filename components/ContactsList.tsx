import type { DemoContact } from '@/types';
import ContactCard from './ContactCard';

interface ContactsListProps {
  contacts: DemoContact[];
}

export default function ContactsList({ contacts }: ContactsListProps) {
  if (contacts.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Your Peers</h2>
        <p className="text-gray-400">Verified and trusted connections</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
}