import { getContacts } from '@/lib/cosmic';
import ContactCard from '@/components/ContactCard';

export const metadata = {
  title: 'Contacts - SecureLink',
  description: 'Your secure peer network',
};

export default async function ContactsPage() {
  const contacts = await getContacts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Contacts</h1>
        <p className="text-gray-400">Your verified peer network</p>
      </div>

      {contacts.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-400 mb-4">No contacts yet</p>
          <button className="btn-primary">Add Your First Peer</button>
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
}