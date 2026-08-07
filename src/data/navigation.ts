import { type LucideIcon } from 'lucide-react';

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavCategory {
  title: string;
  href?: string;
  children: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: NavCategory[];
}

export interface UtilityLink {
  label: string;
  href: string;
}

export const utilityLinks: UtilityLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export const mainNavItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Products',
    href: '/products',
    megaMenu: [
      {
        title: 'Measurement',
        href: '/products',
        children: [
          { label: 'Pressure Measurement', href: '/products/pressure-measurement', description: 'Gauges, transmitters, sensors & switches' },
          { label: 'Temperature Measurement', href: '/products/temperature-measurement', description: 'Transmitters, controllers & sensors' },
          { label: 'Flow Measurement', href: '/products/flow-measurement', description: 'Flow meters & transmitters' },
          { label: 'Level Measurement', href: '/products/level-measurement', description: 'Level sensors & transmitters' },
          { label: 'Analysis Measurement', href: '/products/analysis-measurement', description: 'Gas & liquid analyzers' },
          { label: 'Density Measurement', href: '/products/density-measurement', description: 'Density meters & transmitters' },
        ],
      },
      {
        title: 'Services',
        children: [
          { label: 'Measurement Solutions', href: '/products#measurement-solutions', description: 'Complete measurement system design' },
          { label: 'Project Execution Services', href: '/products#project-execution', description: 'End-to-end project delivery' },
          { label: 'Discrete Automation', href: '/products#discrete-automation', description: 'Industrial automation systems' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    megaMenu: [
      {
        title: 'Industries We Serve',
        href: '/industries',
        children: [
          { label: 'Oil & Gas', href: '/industries/oil-gas', description: 'Upstream, midstream & downstream solutions' },
          { label: 'Power', href: '/industries/power', description: 'Power generation & distribution' },
          { label: 'Mining & Metal', href: '/industries/mining-metal', description: 'Extraction & processing automation' },
          { label: 'Food & Beverage', href: '/industries/food-beverage', description: 'Hygienic processing & packaging' },
          { label: 'Pulp & Paper', href: '/industries/pulp-paper', description: 'Process optimization & control' },
        ],
      },
    ],
  },
  {
    label: 'Festo',
    href: '/festo-germany',
    megaMenu: [
      {
        title: 'Festo Products',
        href: '/festo-germany',
        children: [
          { label: 'Actuators & Drives', href: '/festo-germany#actuators', description: 'Pneumatic & electromechanical actuators' },
          { label: 'Valves & Valve Manifolds', href: '/festo-germany#valves', description: 'Solenoid, proportional & manual valves' },
          { label: 'Compressed Air Preparation', href: '/festo-germany#compressed-air', description: 'Filters, regulators & lubricators' },
          { label: 'Pneumatic Fittings & Tubing', href: '/festo-germany#fittings', description: 'Push-in & threaded fittings, tubing' },
          { label: 'Sensors & Controls', href: '/festo-germany#sensors', description: 'Proximity, pressure & optical sensors' },
          { label: 'Electric Drives & Controls', href: '/festo-germany#electric-drives', description: 'Servo & stepper motors, controllers' },
          { label: 'Handling & Assembly', href: '/festo-germany#handling', description: 'Handling systems, grippers & vacuum' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
];
