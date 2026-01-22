import { getAppSettings, getScreens, getContacts } from '@/lib/cosmic';
import HeroSection from '@/components/HeroSection';
import SecurityFeatures from '@/components/SecurityFeatures';
import ScreenShowcase from '@/components/ScreenShowcase';
import ContactsList from '@/components/ContactsList';

export default async function HomePage() {
  const [settings, screens, contacts] = await Promise.all([
    getAppSettings(),
    getScreens(),
    getContacts(),
  ]);

  if (!settings) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-20 pb-20">
      <HeroSection settings={settings} />
      <SecurityFeatures settings={settings} />
      <ScreenShowcase screens={screens} />
      <ContactsList contacts={contacts} />
    </div>
  );
}