// app/screens/[slug]/page.tsx
import { getScreenBySlug, getScreens, getAppSettings } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import ScreenDetail from '@/components/ScreenDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const screens = await getScreens();
  return screens.map((screen) => ({
    slug: screen.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const screen = await getScreenBySlug(slug);
  
  return {
    title: screen?.metadata?.screen_title || 'Screen - SecureLink',
    description: screen?.metadata?.subheadline || 'SecureLink screen view',
  };
}

export default async function ScreenPage({ params }: PageProps) {
  const { slug } = await params;
  const [screen, settings] = await Promise.all([
    getScreenBySlug(slug),
    getAppSettings(),
  ]);

  if (!screen) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <ScreenDetail screen={screen} settings={settings} />
    </div>
  );
}