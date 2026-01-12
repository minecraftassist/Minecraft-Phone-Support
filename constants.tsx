
import React from 'react';
import { 
  Download, 
  Monitor, 
  LogIn, 
  Zap, 
  Gamepad2, 
  ShieldAlert,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { SupportCategory, BlogPost, FAQItem } from './types';

export const PHONE_NUMBER = "+1 (510)-370-1986";
export const PHONE_URI = "tel:+15103701986";

export const SUPPORT_CATEGORIES: SupportCategory[] = [
  {
    id: 'apk',
    title: 'Minecraft APK Download',
    url: '/minecraft-apk-download',
    description: 'Issues with APK downloads or free versions not installing.',
    icon: <Download className="w-6 h-6" />,
    content: [
      'Ensure "Unknown Sources" is enabled in your Android settings.',
      'Clear your browser cache and try the download again.',
      'Verify that you have enough storage space on your device.',
      'Check if your Android version is compatible with the latest APK.',
      'For direct assistance, call us now.'
    ]
  },
  {
    id: 'unblocked',
    title: 'Minecraft Unblocked',
    url: '/minecraft-unblocked-not-loading',
    description: 'Minecraft unblocked versions not loading in browser or school networks.',
    icon: <ShieldAlert className="w-6 h-6" />,
    content: [
      'Disable any active VPNs or proxies and refresh.',
      'Try using an alternative browser like Firefox or Edge.',
      'Clear local storage and cookies for the gaming site.',
      'Check if the firewall is blocking the game assets.',
      'Stuck on the loading screen? Reach out to support.'
    ]
  },
  {
    id: 'windows11',
    title: 'Windows 11 Issues',
    url: '/minecraft-not-working-windows-11',
    description: 'Minecraft not working or crashing after a Windows 11 update.',
    icon: <Monitor className="w-6 h-6" />,
    content: [
      'Update your Graphics Drivers to the latest Windows 11 version.',
      'Run Minecraft Launcher as Administrator.',
      'Try resetting the Minecraft app in Windows Settings.',
      'Reinstall the Gaming Services app from Microsoft Store.',
      'Facing BSOD or crashes? Call our experts.'
    ]
  },
  {
    id: 'login',
    title: 'Login Problems',
    url: '/minecraft-login-issues',
    description: 'Stuck at login screen or authentication servers are down.',
    icon: <LogIn className="w-6 h-6" />,
    content: [
      'Migrate your Mojang account to a Microsoft account if required.',
      'Reset your Microsoft account password.',
      'Verify the server status at help.minecraft.net.',
      'Disable 2FA temporarily to test the connection.',
      'Login failed? Get instant phone support.'
    ]
  },
  {
    id: 'lagging',
    title: 'Lag & Performance',
    url: '/minecraft-lagging',
    description: 'Low FPS, stuttering, or high ping while playing.',
    icon: <Zap className="w-6 h-6" />,
    content: [
      'Allocate more RAM to Minecraft in the Launcher settings.',
      'Use OptiFine or Sodium mods for better performance.',
      'Lower your Render Distance and Shadow settings.',
      'Close background applications consuming CPU.',
      'Persistent lag? Our technicians can help.'
    ]
  },
  {
    id: 'xbox',
    title: 'Xbox Issues',
    url: '/minecraft-xbox-issues',
    description: 'Minecraft not working, freezing, or crashing on Xbox consoles.',
    icon: <Gamepad2 className="w-6 h-6" />,
    content: [
      'Perform a hard reset of your Xbox console.',
      'Check for system updates in Settings.',
      'Reinstall the game if it freezes on the Mojang logo.',
      'Clear the local save data (ensure cloud sync is on).',
      'Console issues? Call us at +1 (510)-370-1986.'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Fixing Minecraft APK Download Problems',
    slug: 'minecraft-apk-download-problems',
    excerpt: 'Facing Minecraft APK download problems? Call our customer support at +1 (510)-370-1986 for instant assistance.',
    content: 'Minecraft APK downloads can be tricky, especially with security restrictions on modern Android devices. Many users report "App not installed" errors. To fix this, ensure you have disabled Play Protect and allowed installation from the specific browser you are using. If problems persist, our team is available 24/7 at +1 (510)-370-1986.',
    date: 'Oct 24, 2023',
    author: 'Steve Support',
    image: 'https://picsum.photos/seed/minecraft1/800/400'
  },
  {
    id: '2',
    title: 'Why Your Windows 11 Minecraft is Crashing',
    slug: 'windows-11-minecraft-fix',
    excerpt: 'Is your Minecraft crashing after the latest Windows 11 update? Contact us at +1 (510)-370-1986.',
    content: 'The transition to Windows 11 introduced new driver requirements for OpenGL. If your game crashes, you likely need a driver update. However, sometimes the issue lies with the Xbox App or Gaming Services. Call +1 (510)-370-1986 for a step-by-step diagnostic.',
    date: 'Nov 12, 2023',
    author: 'Alex Tech',
    image: 'https://picsum.photos/seed/minecraft2/800/400'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I fix 'Minecraft Unblocked Not Loading'?",
    answer: "This is often caused by school firewalls or outdated browser caches. Try using a mirror site or call our support at +1 (510)-370-1986 for specialized tunneling solutions."
  },
  {
    question: "Why can't I log into my Minecraft account?",
    answer: "Since the Mojang-Microsoft migration, most login issues stem from incorrect account types. Ensure you are using the 'Microsoft Login' button. For password resets, call +1 (510)-370-1986."
  },
  {
    question: "Minecraft is lagging on my high-end PC, what do I do?",
    answer: "Minecraft is heavily CPU-bound. Check your Java arguments to ensure you're allocating at least 4GB of RAM. If lag persists, call us for a performance audit."
  }
];
