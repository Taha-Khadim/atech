export const siteConfig = {
  name: 'Automation Technology',
  tagline: 'Open New Automation Mind',
  domain: 'automationtechnology.com.pk',
  description:
    'Pakistan\'s leading supplier of Industrial Automation, Pneumatic, Hydraulic, Filtration and Motion Control Equipment & Instrumentation. Authorized Festo distributor.',
  logo: '/ati-logo.png',
  contact: {
    address: 'S-42, 2nd Floor, Gulberg Center, Main Boulevard, Gulberg-III Lahore-54660-Pakistan',
    phones: ['+92-302-8689800', '+92-42-35750039'],
    emails: {
      general: 'Info@automationtechnology.com.pk',
      sales: 'Sales@automationtechnology.com.pk',
      technical: 'Technical@automationtechnology.com.pk',
    },
  },
  social: {
    facebook: '#',
    linkedin: '#',
    twitter: '#',
  },
  foundingYear: 2006,
  stats: {
    yearsExperience: 18,
    customers: 500,
    projects: 1200,
    employees: 45,
  },
} as const;

export type SiteConfig = typeof siteConfig;
