export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gradient: string;
  iconLetter: string;
  applications: string[];
  keyProducts: string[];
  stats: { label: string; value: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'oil-gas',
    title: 'Oil & Gas',
    shortDescription: 'Comprehensive automation and measurement solutions for upstream, midstream and downstream operations.',
    fullDescription: 'Automation Technology delivers end-to-end instrumentation and automation solutions for the oil & gas industry. From wellhead monitoring to refinery process control, our products and services ensure safe, efficient and compliant operations across the entire value chain. We partner with world-leading manufacturers to bring the best technology to Pakistan\'s oil & gas sector.',
    image: '/images/hero/indus-oil-gas.jpg',
    gradient: 'from-amber-900 to-yellow-800',
    iconLetter: 'OG',
    applications: [
      'Wellhead monitoring and control',
      'Pipeline pressure and flow monitoring',
      'Tank farm level measurement',
      'Refinery process control',
      'Custody transfer measurement',
      'Gas compressor station automation',
      'Safety instrumented systems (SIS)',
      'Emission monitoring and compliance',
    ],
    keyProducts: ['Pressure Transmitters', 'Coriolis Flow Meters', 'Radar Level Transmitters', 'Gas Analyzers', 'Control Valves', 'Safety PLC Systems'],
    stats: [
      { label: 'Projects Delivered', value: '200+' },
      { label: 'Active Clients', value: '45' },
      { label: 'Years of Experience', value: '18' },
      { label: 'Certified Engineers', value: '15' },
    ],
  },
  {
    slug: 'power',
    title: 'Power',
    shortDescription: 'Reliable measurement and control solutions for power generation, transmission and distribution.',
    fullDescription: 'The power industry demands the highest levels of reliability and precision. Automation Technology provides comprehensive instrumentation and control solutions for thermal, hydro and renewable power plants. Our solutions help optimize efficiency, reduce downtime and ensure safety across all power generation and distribution operations in Pakistan.',
    image: '/images/hero/image-2.jpg',
    gradient: 'from-blue-900 to-cyan-800',
    iconLetter: 'PW',
    applications: [
      'Boiler drum level measurement',
      'Steam temperature and pressure control',
      'Turbine condition monitoring',
      'Feedwater flow measurement',
      'Stack emission monitoring',
      'Substation automation',
      'Cooling water treatment',
      'Fuel gas measurement',
    ],
    keyProducts: ['Temperature Transmitters', 'DP Flow Meters', 'Level Transmitters', 'Gas Analyzers', 'Vibration Sensors', 'SCADA Systems'],
    stats: [
      { label: 'Power Plants Served', value: '30+' },
      { label: 'MW Monitored', value: '5000+' },
      { label: 'Active Clients', value: '20' },
      { label: 'Uptime Guarantee', value: '99.5%' },
    ],
  },
  {
    slug: 'mining-metal',
    title: 'Mining & Metal',
    shortDescription: 'Rugged automation and instrumentation solutions for extraction, processing and refining.',
    fullDescription: 'Mining and metal processing environments are among the harshest on earth. Automation Technology supplies instruments and automation systems engineered to withstand extreme conditions while delivering accurate and reliable measurements. From mine-to-mill to final product quality control, we help optimize every stage of the mining and metals value chain.',
    image: '/images/hero/indus-oil-gas.jpg',
    gradient: 'from-gray-800 to-gray-700',
    iconLetter: 'MM',
    applications: [
      'Ore processing and beneficiation',
      'Slurry density and flow measurement',
      'Furnace temperature monitoring',
      'Metal smelting and refining',
      'Dust and emission monitoring',
      'Conveyor belt monitoring',
      'Water treatment and recycling',
      'Stockpile level monitoring',
    ],
    keyProducts: ['Nucleonic Density Gauges', 'Coriolis Flow Meters', 'High-Temperature Sensors', 'Dust Monitors', 'Radar Level Meters', 'PLC Systems'],
    stats: [
      { label: 'Mine Sites Served', value: '25+' },
      { label: 'Installations', value: '500+' },
      { label: 'Years in Mining', value: '15' },
      { label: 'Countries Served', value: '3' },
    ],
  },
  {
    slug: 'food-beverage',
    title: 'Food & Beverage',
    shortDescription: 'Hygienic automation solutions meeting FDA and food safety standards for processing and packaging.',
    fullDescription: 'The food and beverage industry requires hygienic, reliable and compliant instrumentation. Automation Technology provides a full range of measurement and automation solutions that meet FDA, EHEDG and other food safety standards. From raw material reception to final product packaging, we ensure quality, safety and efficiency throughout your production process.',
    image: '/images/hero/indus-oil-gas.jpg',
    gradient: 'from-green-900 to-emerald-800',
    iconLetter: 'FB',
    applications: [
      'CIP/SIP process monitoring',
      'Ingredient batching and dosing',
      'Pasteurization temperature control',
      'Fill level detection',
      'pH and conductivity monitoring',
      'Clean-in-place automation',
      'Packaging line control',
      'Quality and compliance reporting',
    ],
    keyProducts: ['Sanitary Temperature Sensors', 'Electromagnetic Flow Meters', 'pH Analyzers', 'Conductivity Meters', 'Hygienic Level Sensors', 'Batching Controllers'],
    stats: [
      { label: 'Food Plants Served', value: '40+' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Years in F&B', value: '12' },
      { label: 'Certifications', value: '5' },
    ],
  },
  {
    slug: 'pulp-paper',
    title: 'Pulp & Paper',
    shortDescription: 'Process optimization and quality control solutions for the pulp and paper industry.',
    fullDescription: 'The pulp and paper industry is energy-intensive and requires precise control of multiple process variables. Automation Technology delivers measurement and automation solutions that optimize energy consumption, improve product quality and reduce waste. From wood handling to finished product, our solutions cover every stage of the pulp and paper manufacturing process.',
    image: '/images/hero/indus-oil-gas.jpg',
    gradient: 'from-stone-800 to-amber-900',
    iconLetter: 'PP',
    applications: [
      'Digester temperature and pressure control',
      'Basis weight measurement',
      'Pulp consistency monitoring',
      'Chemical recovery process',
      'Boiler and evaporator control',
      'Water treatment and recycling',
      'Coating and calendering',
      'Quality measurement systems',
    ],
    keyProducts: ['Consistency Transmitters', 'Basis Weight Gauges', 'pH/Conductivity Analyzers', 'DP Flow Meters', 'Temperature Sensors', 'QCS Systems'],
    stats: [
      { label: 'Paper Mills Served', value: '15+' },
      { label: 'Process Optimized', value: '50+' },
      { label: 'Energy Savings', value: '20%' },
      { label: 'Years in P&P', value: '10' },
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
