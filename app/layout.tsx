import type { Metadata } from 'next';
import { getAppSettings } from '@/lib/cosmic';
import Header from '@/components/Header';
import CosmicBadge from '@/components/CosmicBadge';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getAppSettings();
  
  return {
    title: settings?.metadata?.app_name || 'SecureLink',
    description: settings?.metadata?.tagline || 'No servers. No tracking. Fully encrypted.',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getAppSettings();
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header settings={settings} />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  );
}