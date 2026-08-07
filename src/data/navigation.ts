export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  heading: string;
  children: NavChild[];
}

export interface NavColumn {
  title: string;
  groups: NavGroup[];
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownType?: 'mega' | 'simple';
  megaColumns?: NavColumn[];
  simpleLinks?: NavChild[];
}

export const mainNavItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '/products',
    hasDropdown: true,
    dropdownType: 'mega',
    megaColumns: [
      {
        title: 'Measurement Instrumentation',
        groups: [
          {
            heading: 'INSTRUMENTS',
            children: [
              { label: 'Pressure Measurement', href: '/products/pressure-measurement' },
              { label: 'Temperature Measurement', href: '/products/temperature-measurement' },
              { label: 'Level Measurement', href: '/products/level-measurement' },
              { label: 'Flow Measurement', href: '/products/flow-measurement' },
              { label: 'Gas Analysis', href: '/products/analysis-measurement' },
            ],
          },
          {
            heading: 'ANALYSIS',
            children: [
              { label: 'Gas Analysis', href: '/products/analysis-measurement' },
              { label: 'Liquid Analysis', href: '/products/analysis-measurement' },
              { label: 'Flame & Gas Detection', href: '/products/analysis-measurement' },
              { label: 'Density & Viscosity', href: '/products/density-measurement' },
              { label: 'Industrial Wireless Technology', href: '/products' },
            ],
          },
          {
            heading: 'BRANDS',
            children: [
              { label: 'Schubert & Salzer (Germany)', href: '/products' },
              { label: 'Clark Reliance (USA)', href: '/products' },
              { label: 'Schmersal (Germany)', href: '/products' },
              { label: 'Festo (Germany)', href: '/festo-germany' },
              { label: 'Herolift (China)', href: '/products' },
              { label: 'SunCom (China)', href: '/products' },
            ],
          },
        ],
      },
      {
        title: 'Automation System',
        groups: [
          {
            heading: 'PRODUCTS & SOFTWARE',
            children: [
              { label: 'Distributed Control Systems', href: '/products' },
              { label: 'SCADA Systems', href: '/products' },
              { label: 'Manufacturing Execution Systems', href: '/products' },
              { label: 'Asset Performance Management', href: '/products' },
              { label: 'Safety Instrumented Systems', href: '/products' },
            ],
          },
        ],
      },
      {
        title: 'Test & Measurement',
        groups: [
          {
            heading: 'PRODUCTS',
            children: [
              { label: 'Switches', href: '/products' },
              { label: 'NI Data Acquisition', href: '/products' },
              { label: 'NI Software', href: '/products' },
              { label: 'Calibration Equipment', href: '/products' },
              { label: 'Vibration Monitoring', href: '/products' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    hasDropdown: true,
    dropdownType: 'simple',
    simpleLinks: [
      { label: 'Oil & Gas', href: '/industries/oil-gas' },
      { label: 'Power', href: '/industries/power' },
      { label: 'Mining & Metal', href: '/industries/mining-metal' },
      { label: 'Food & Beverage', href: '/industries/food-beverage' },
      { label: 'Pulp & Paper', href: '/industries/pulp-paper' },
    ],
  },
  {
    label: 'Support',
    href: '/contact',
  },
  {
    label: 'Company',
    href: '/about',
    hasDropdown: true,
    dropdownType: 'simple',
    simpleLinks: [
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Company History', href: '/about#history' },
      { label: 'Our Purpose', href: '/about#purpose' },
      { label: 'Sustainability', href: '/about#sustainability' },
    ],
  },
];
