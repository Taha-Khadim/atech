export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavAsideSection {
  heading: string;
  items: NavChild[];
}

export interface NavAsideCategory {
  label: string;
  sections: NavAsideSection[];
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownType?: 'mega-aside';
  asideCategories?: NavAsideCategory[];
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
    dropdownType: 'mega-aside',
    asideCategories: [
      {
        label: 'Measurement Instrumentation',
        sections: [
          {
            heading: 'Instruments',
            items: [
              { label: 'Pressure Measurement', href: '/products/pressure-measurement' },
              { label: 'Temperature Measurement', href: '/products/temperature-measurement' },
              { label: 'Level Measurement', href: '/products/level-measurement' },
              { label: 'Flow Measurement', href: '/products/flow-measurement' },
              { label: 'Gas Analysis', href: '/products/analysis-measurement' },
              { label: 'Liquid Analysis', href: '/products/analysis-measurement' },
              { label: 'Flame & Gas Detection', href: '/products/analysis-measurement' },
              { label: 'Density & Viscosity', href: '/products/density-measurement' },
              { label: 'Industrial Wireless Technology', href: '/products' },
            ],
          },
          {
            heading: 'Brands',
            items: [
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
        label: 'Automation System',
        sections: [
          {
            heading: 'Products & Software',
            items: [
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
        label: 'Test & Measurement',
        sections: [
          {
            heading: 'Products',
            items: [
              { label: 'Switches', href: '/products' },
              { label: 'NI Data Acquisition', href: '/products' },
              { label: 'NI Software', href: '/products' },
              { label: 'Calibration Equipment', href: '/products' },
              { label: 'Vibration Monitoring', href: '/products' },
            ],
          },
        ],
      },
      {
        label: 'Discrete Automation',
        sections: [
          {
            heading: 'Products & Software',
            items: [
              { label: 'Pneumatic Systems', href: '/festo-germany' },
              { label: 'Electric Drives', href: '/festo-germany' },
              { label: 'Servo Motors & Controllers', href: '/festo-germany' },
              { label: 'Valves & Manifolds', href: '/festo-germany' },
              { label: 'Industrial Controllers', href: '/festo-germany' },
            ],
          },
        ],
      },
      {
        label: 'Actuators',
        sections: [
          {
            heading: 'Products & Software',
            items: [
              { label: 'Pneumatic Actuators', href: '/festo-germany' },
              { label: 'Electric Actuators', href: '/festo-germany' },
              { label: 'Grippers', href: '/festo-germany' },
              { label: 'Handling Systems', href: '/festo-germany' },
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
    dropdownType: 'mega-aside',
    asideCategories: [
      {
        label: 'Industries',
        sections: [
          {
            heading: 'Process Industries',
            items: [
              { label: 'Oil & Gas', href: '/industries/oil-gas' },
              { label: 'Chemical', href: '/industries/oil-gas' },
              { label: 'Food & Beverage', href: '/industries/food-beverage' },
              { label: 'Pulp & Paper', href: '/industries/pulp-paper' },
              { label: 'Power', href: '/industries/power' },
              { label: 'Water & Wastewater', href: '/industries/oil-gas' },
              { label: 'Mining', href: '/industries/mining-metal' },
              { label: 'Packaging', href: '/industries/food-beverage' },
            ],
          },
          {
            heading: 'Manufacturing & Infrastructure',
            items: [
              { label: 'Factory Automation', href: '/industries/mining-metal' },
              { label: 'Automotive & Transportation', href: '/industries/mining-metal' },
              { label: 'Renewable Energy', href: '/industries/power' },
              { label: 'Data Centers', href: '/industries/power' },
              { label: 'Cement', href: '/industries/mining-metal' },
              { label: 'Pharmaceutical', href: '/industries/food-beverage' },
              { label: 'Iron & Steel', href: '/industries/mining-metal' },
              { label: 'Battery Manufacturing', href: '/industries/mining-metal' },
            ],
          },
        ],
      },
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
    dropdownType: 'mega-aside',
    asideCategories: [
      {
        label: 'About Us',
        sections: [
          {
            heading: 'Company',
            items: [
              { label: 'About Automation Technology', href: '/about' },
              { label: 'Leadership', href: '/about#leadership' },
              { label: 'Global Offices', href: '/contact' },
              { label: 'Investor Relations', href: '/about' },
            ],
          },
        ],
      },
      {
        label: 'Careers',
        sections: [
          {
            heading: 'Work With Us',
            items: [
              { label: 'Life at Automation Technology', href: '/about' },
              { label: 'Early Careers', href: '/about' },
              { label: 'Benefits', href: '/about' },
              { label: 'How We Hire', href: '/about' },
              { label: 'Current Opportunities', href: '/contact' },
            ],
          },
        ],
      },
      {
        label: 'Learning and Support',
        sections: [
          {
            heading: 'Resources',
            items: [
              { label: 'Technical Support', href: '/contact' },
              { label: 'Support and Success', href: '/contact' },
              { label: 'Trainings', href: '/contact' },
              { label: 'Web Seminars', href: '/contact' },
              { label: 'Documentations & Downloads', href: '/festo-germany#certificates' },
            ],
          },
        ],
      },
    ],
  },
];
