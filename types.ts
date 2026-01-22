// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at?: string;
  modified_at?: string;
}

// Select dropdown value type
export interface SelectValue {
  key: string;
  value: string;
}

// File/Image type
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Security Feature type
export interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

// App Settings
export interface AppSettings extends CosmicObject {
  type: 'app-settings';
  metadata: {
    app_name: string;
    tagline: string;
    privacy_statement: string;
    encryption_badge_text: string;
    app_logo?: CosmicFile;
    primary_color: string;
    background_color: string;
    security_features?: SecurityFeature[];
  };
}

// UI Component
export interface UIComponent extends CosmicObject {
  type: 'ui-components';
  metadata: {
    component_name: string;
    component_type: SelectValue;
    label: string;
    icon_emoji?: string;
    accent_color?: string;
    is_active_state?: boolean;
    tooltip_text?: string;
  };
}

// Screen types
export type ScreenType = 'onboarding' | 'login' | 'contacts' | 'chat' | 'voice_call' | 'video_call' | 'add_peer' | 'settings';

export interface Screen extends CosmicObject {
  type: 'screens';
  metadata: {
    screen_title: string;
    screen_type: SelectValue;
    headline: string;
    subheadline?: string;
    description?: string;
    background_image?: CosmicFile;
    icon?: string;
    primary_action_label?: string | null;
    secondary_action_label?: string | null;
    show_encryption_indicator?: boolean;
    ui_components?: UIComponent[];
  };
}

// Demo Contact
export interface DemoContact extends CosmicObject {
  type: 'demo-contacts';
  metadata: {
    display_name: string;
    public_key_preview: string;
    avatar?: CosmicFile;
    online_status: SelectValue;
    verification_status: SelectValue;
    last_seen?: string;
    trust_level?: number;
  };
}

// Demo Message
export interface DemoMessage extends CosmicObject {
  type: 'demo-messages';
  metadata: {
    message_content: string;
    sender?: DemoContact | UIComponent;
    is_outgoing: boolean;
    timestamp: string;
    delivery_status: SelectValue;
    encryption_verified: boolean;
  };
}

// Online status type
export type OnlineStatus = 'online' | 'offline' | 'away';

// Verification status type
export type VerificationStatus = 'verified' | 'unverified' | 'pending';

// Delivery status type
export type DeliveryStatus = 'sent' | 'delivered' | 'read' | 'failed';