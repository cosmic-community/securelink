import Link from 'next/link';
import type { AppSettings } from '@/types';

interface HeaderProps {
  settings: AppSettings | null;
}

export default function Header({ settings }: HeaderProps) {
  const appName = settings?.metadata?.app_name || 'SecureLink';
  const primaryColor = settings?.metadata?.primary_color || '#00D9FF';

  return (
    <header className="sticky top-0 z-40 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            {settings?.metadata?.app_logo?.imgix_url && (
              <img
                src={`${settings.metadata.app_logo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={appName}
                width={40}
                height={40}
                className="rounded-lg"
              />
            )}
            <span className="text-xl font-bold" style={{ color: primaryColor }}>
              {appName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/contacts" className="text-gray-300 hover:text-white transition-colors">
              Contacts
            </Link>
            <Link href="/chat" className="text-gray-300 hover:text-white transition-colors">
              Chat
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="badge bg-secondary/20 text-secondary">
              <span>🔒</span>
              <span>{settings?.metadata?.encryption_badge_text || 'E2E Encrypted'}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}