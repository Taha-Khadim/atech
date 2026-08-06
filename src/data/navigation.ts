import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', page: 'home' },
  {
    label: 'Products',
    page: 'products',
    dropdown: [
      { label: 'Pressure Measurement', page: 'products' },
      { label: 'Temperature Measurement', page: 'products' },
      { label: 'Flow Measurement', page: 'products' },
      { label: 'Level Measurement', page: 'products' },
      { label: 'Gas Analysis', page: 'products' },
      { label: 'Liquid Analysis', page: 'products' },
      { label: 'Flame & Gas Detection', page: 'products' },
      { label: 'Density & Viscosity', page: 'products' },
    ],
  },
  {
    label: 'Industries',
    page: 'industries',
    dropdown: [
      { label: 'Oil & Gas', page: 'industries' },
      { label: 'Chemical', page: 'industries' },
      { label: 'Food & Beverage', page: 'industries' },
      { label: 'Pulp & Paper', page: 'industries' },
      { label: 'Power', page: 'industries' },
      { label: 'Water & Wastewater', page: 'industries' },
      { label: 'Mining', page: 'industries' },
      { label: 'Factory Automation', page: 'industries' },
      { label: 'Automotive & Transportation', page: 'industries' },
      { label: 'Renewable Energy', page: 'industries' },
      { label: 'Data Centers', page: 'industries' },
      { label: 'Cement', page: 'industries' },
      { label: 'Pharmaceutical', page: 'industries' },
      { label: 'Iron & Steel', page: 'industries' },
    ],
  },
  { label: 'Festo Germany', page: 'festo' },
  { label: 'About', page: 'about' },
  { label: 'Contact Us', page: 'contact' },
]
