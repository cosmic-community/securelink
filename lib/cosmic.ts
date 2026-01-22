import { createBucketClient } from '@cosmicjs/sdk';
import type { AppSettings, Screen, DemoContact, DemoMessage, UIComponent } from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
});

// Helper for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch app settings (singleton)
export async function getAppSettings(): Promise<AppSettings | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'app-settings' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as AppSettings;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching app settings:', error);
    throw new Error('Failed to fetch app settings');
  }
}

// Fetch all screens
export async function getScreens(): Promise<Screen[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'screens' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Screen[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching screens:', error);
    throw new Error('Failed to fetch screens');
  }
}

// Fetch single screen by slug
export async function getScreenBySlug(slug: string): Promise<Screen | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'screens', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Screen;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching screen:', error);
    throw new Error('Failed to fetch screen');
  }
}

// Fetch all contacts
export async function getContacts(): Promise<DemoContact[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'demo-contacts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as DemoContact[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching contacts:', error);
    throw new Error('Failed to fetch contacts');
  }
}

// Fetch single contact by slug
export async function getContactBySlug(slug: string): Promise<DemoContact | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'demo-contacts', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as DemoContact;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching contact:', error);
    throw new Error('Failed to fetch contact');
  }
}

// Fetch all messages
export async function getMessages(): Promise<DemoMessage[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'demo-messages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as DemoMessage[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching messages:', error);
    throw new Error('Failed to fetch messages');
  }
}

// Fetch all UI components
export async function getUIComponents(): Promise<UIComponent[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'ui-components' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as UIComponent[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching UI components:', error);
    throw new Error('Failed to fetch UI components');
  }
}