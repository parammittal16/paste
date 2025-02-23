import {ValueOf} from '../types/utils';

export const TWILIO_RED = '#F22F46';
export const TWILIO_BLUE = '#0D122B';

export const PASTE_PACKAGE_PREFIX = '@twilio-paste/';

export const SidebarCategoryRoutes = {
  COMPONENTS: '/components',
  PRIMITIVES: '/primitives',
  UTILITIES: '/utilities',
  GETTING_STARTED: '/getting-started',
  TOKENS: '/tokens',
};

export const PackageStatus = {
  BACKLOG: 'backlog',
  ALPHA: 'alpha',
  BETA: 'beta',
  STABLE: 'stable',
};

export const SiteMetaDefaults = {
  TITLE: 'Paste: An Internal Design System for Twilio',
  DESCRIPTION:
    'Paste is an internal design system for designing and building consistent experiences at Twilio. It is made up of tokens and components, along with in-depth documentation to assist designers and developers faced with solving our customers’ problems. It is open source and contributions are welcome.',
};

export const Themes = {
  CONSOLE: 'default',
  SENDGRID: 'sendgrid',
} as const;

export type ThemesType = ValueOf<typeof Themes>;
