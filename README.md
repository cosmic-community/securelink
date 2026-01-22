# SecureLink - P2P Communication Platform

![SecureLink App Preview](https://imgix.cosmicjs.com/c9ed1690-f7a8-11f0-9dc2-e71018d74d17-photo-1614064641938-3bbee52942c7-1769096477220.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, secure peer-to-peer communication showcase built with Next.js and Cosmic. This application demonstrates the complete UI/UX for a privacy-focused messaging platform featuring end-to-end encryption, decentralized architecture, and cryptographic identity management.

## Features

- 🔒 **Privacy-First Design**: Dark mode UI emphasizing security and trust
- 📱 **Complete Screen Showcase**: All 8 app screens fully implemented
- 💬 **Interactive Chat Demo**: Real-time message display with encryption indicators
- 👥 **Contact Management**: Peer list with verification status and trust levels
- 📞 **Call Interfaces**: Voice and video call UI with all controls
- 🎨 **CMS-Powered**: All content managed through Cosmic
- 📲 **Fully Responsive**: Mobile-first design for all devices

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69724395439a2d58af1dfdf5&clone_repository=69724666439a2d58af1dfe76)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a modern, secure, peer-to-peer communication application that supports text messaging, voice calls, and video calls, with end-to-end encryption and no central servers.
>
> Platform: Mobile app (dark mode preferred)
>
> Screens to include:
>
> Onboarding / Welcome Screen
>
> Messaging about privacy, encryption, and decentralization
>
> "No servers. No tracking. Fully encrypted."
>
> Secure Login / Identity Screen
>
> Key-based login (no email or phone number)
>
> Generate or import cryptographic key
>
> Contacts / Peer List Screen
>
> List of contacts with online/offline indicators
>
> Peer verification icons for trust
>
> Chat Conversation Screen
>
> Text messages with encrypted message indicators
>
> Timestamp, delivery status, and verified peer badge
>
> Buttons for voice call and video call at top
>
> Voice Call Screen
>
> Clean interface with large call timer
>
> Mute, speaker, end call, add peer buttons
>
> Minimal, dark, trust-focused UI
>
> Video Call Screen
>
> Large video preview of peer(s)
>
> Small self-view window
>
> Call controls (mute, camera on/off, end call, switch camera)
>
> Indicator showing encryption / P2P connection
>
> Add Peer / Invite Screen
>
> QR code scanning
>
> Share public key or invite link
>
> Security & Settings Screen
>
> Key management
>
> Encryption status
>
> Peer verification
>
> Data stored only on device
>
> Design Style:
>
> Dark mode: deep navy, charcoal black, subtle neon blue/green accents
>
> Typography: modern sans-serif (Inter / SF Pro style)
>
> Minimal icons for security, calls, and messages
>
> Rounded corners, soft shadows, subtle gradients
>
> Futuristic but clean, emphasizing privacy and trust
>
> Overall feeling:
> Private, trustworthy, user-friendly, decentralized, technically advanced, ready for real-time P2P calls and chats."

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Inter Font](https://fonts.google.com/specimen/Inter) - Modern sans-serif typography

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the SecureLink content bucket

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd securelink
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Cosmic SDK Examples

### Fetching App Settings (Singleton)
```typescript
const { object } = await cosmic.objects
  .findOne({ type: 'app-settings' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Screens with UI Components
```typescript
const { objects } = await cosmic.objects
  .find({ type: 'screens' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Contacts
```typescript
const { objects } = await cosmic.objects
  .find({ type: 'demo-contacts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses the following Cosmic Object Types:

| Object Type | Description |
|-------------|-------------|
| `app-settings` | Global app configuration (singleton) |
| `screens` | Screen content and UI components |
| `demo-contacts` | Sample peer/contact profiles |
| `demo-messages` | Conversation message data |
| `ui-components` | Reusable UI element definitions |

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy!

## License

MIT License - feel free to use this project for your own purposes.
<!-- README_END -->