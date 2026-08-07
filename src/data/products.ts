export interface ProductSubItem {
  name: string;
  description: string;
  image?: string;
 specs?: string[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  subItems: ProductSubItem[];
}

export const measurementCategories: ProductCategory[] = [
  {
    slug: 'pressure-measurement',
    title: 'Pressure Measurement',
    shortDescription: 'Precision gauges, transmitters, sensors and switches for all industrial pressure applications.',
    fullDescription: 'Our comprehensive range of pressure measurement instruments covers everything from basic mechanical gauges to advanced smart transmitters. Designed for the harshest industrial environments, our pressure solutions deliver reliable and accurate measurements across all process industries.',
    icon: 'Gauge',
    image: '/products/pressure-hero.jpg',
    subItems: [
      {
        name: 'Pressure Gauges',
        description: 'High-quality mechanical and digital pressure gauges for process monitoring. Available in various ranges, materials and connection types for industrial applications.',
        image: '/products/pressure-gauges.jpg',
        specs: ['Range: 0-600 bar', 'Accuracy: ±0.5% to ±1.6%', 'Process connection: 1/4" to 1" NPT/BSP', 'Materials: SS316, Brass, Monel'],
      },
      {
        name: 'Pressure Transmitters',
        description: 'Smart pressure transmitters with HART and 4-20mA output. Ideal for process control, custody transfer and safety-critical applications across oil & gas, power and chemical industries.',
        image: '/products/pressure-transmitter.jpg',
        specs: ['Range: 0-0.1 bar to 0-1000 bar', 'Accuracy: ±0.04%', 'Output: 4-20mA, HART, FF, Profibus', 'Ex-d / Ex-i certified'],
      },
      {
        name: 'Pressure Sensors',
        description: 'Compact and rugged pressure sensors for OEM and industrial automation applications. Fast response time and high reliability in demanding environments.',
        image: '/products/pressure-sensors.jpg',
        specs: ['Range: 0-1 bar to 0-600 bar', 'Output: 4-20mA, 0-10V, I2C', 'IP67 protection', 'Response time: <1ms'],
      },
      {
        name: 'Pressure Switches',
        description: 'Mechanical and electronic pressure switches for monitoring and control. Available with adjustable setpoints, various contact configurations and explosion-proof housings.',
        image: '/products/pressure-switch.jpg',
        specs: ['Range: 0-1 bar to 0-400 bar', 'Switching elements: SPDT, DPDT', 'Adjustable setpoint', 'Housing: Aluminum, SS316'],
      },
    ],
  },
  {
    slug: 'temperature-measurement',
    title: 'Temperature Measurement',
    shortDescription: 'Advanced transmitters, controllers and sensors for accurate temperature monitoring and control.',
    fullDescription: 'Temperature measurement is critical in process industries. We offer a complete portfolio of temperature instruments including RTDs, thermocouples, transmitters and controllers, engineered for precision and long-term stability in extreme conditions.',
    icon: 'Thermometer',
    image: '/products/temp-hero.jpg',
    subItems: [
      {
        name: 'Temperature Transmitters',
        description: 'Head-mounted and DIN-rail temperature transmitters supporting RTD, thermocouple and resistance inputs. HART protocol enabled for seamless integration with DCS/PLC systems.',
        image: '/products/temp-transmitter.jpg',
        specs: ['Input: RTD (Pt100/1000), TC (J/K/T/E/N/R/S/B)', 'Output: 4-20mA, HART', 'Accuracy: ±0.1°C', 'Explosion-proof housings available'],
      },
      {
        name: 'Temperature Controllers',
        description: 'PID temperature controllers with advanced auto-tuning algorithms. Available in 1/16 DIN to 1/4 DIN panel mount sizes for precise process temperature control.',
        image: '/products/temp-controller.jpg',
        specs: ['Input: Universal (TC/RTD/mV/mA)', 'Control output: Relay, SSR, 4-20mA', 'Auto-tune PID', 'Setpoint programming up to 8 patterns'],
      },
      {
        name: 'Temperature Sensors',
        description: 'RTD and thermocouple temperature sensors for process and surface temperature measurement. Custom probe designs available for specific application requirements.',
        image: '/products/temp-sensor.jpg',
        specs: ['Sensor types: Pt100, Pt1000, J/K/T/E/N type TC', 'Sheath materials: SS316, Inconel, Hastelloy', 'Temperature range: -200°C to +1800°C', 'IP67 rated'],
      },
    ],
  },
  {
    slug: 'flow-measurement',
    title: 'Flow Measurement',
    shortDescription: 'Reliable flow meters and transmitters for liquids, gases and steam applications.',
    fullDescription: 'Our flow measurement solutions cover all major technologies including differential pressure, Coriolis, vortex, electromagnetic and ultrasonic. Each technology is selected based on the specific process requirements to ensure optimal performance and accuracy.',
    icon: 'Waves',
    image: '/products/pressure-facility.jpg',
    subItems: [
      {
        name: 'Differential Pressure Flow',
        description: 'Orifice plates, venturi tubes and flow nozzles with DP transmitters for accurate flow measurement of liquids, gases and steam in pipelines.',
        specs: ['Line sizes: 1/2" to 48"', 'Accuracy: ±0.5% to ±1.5%', 'Turndown ratio: 3:1 to 4:1', 'Compliant with ISO 5167'],
      },
      {
        name: 'Coriolis Flow Meters',
        description: 'Direct mass flow and density measurement for liquids and gases. Ideal for custody transfer, batching and process control applications.',
        specs: ['Flow range: 0.5 kg/h to 450,000 kg/h', 'Accuracy: ±0.05% to ±0.1%', 'Multi-parameter: mass, volume, density, temperature', 'Safe area and Ex-d versions'],
      },
      {
        name: 'Electromagnetic Flow Meters',
        description: 'Non-intrusive flow measurement for conductive liquids. No moving parts, minimal pressure drop and excellent long-term stability.',
        specs: ['Line sizes: DN15 to DN3000', 'Accuracy: ±0.2% to ±0.5%', 'Conductivity: >5 μS/cm', 'Lining: PTFE, FEP, Neoprene, Hard Rubber'],
      },
    ],
  },
  {
    slug: 'level-measurement',
    title: 'Level Measurement',
    shortDescription: 'Advanced level sensors and transmitters for continuous and point-level detection.',
    fullDescription: 'From simple float switches to advanced radar and guided wave systems, our level measurement portfolio covers all technologies for reliable level detection in tanks, vessels and open channels across every industry.',
    icon: 'Layers',
    image: '/images/industries/generic.jpg',
    subItems: [
      {
        name: 'Radar Level Transmitters',
        description: 'Non-contact radar level measurement using FMCW technology. Suitable for liquids and solids in challenging process conditions with vapors, dust or foam.',
        specs: ['Range: up to 70m', 'Accuracy: ±1mm', 'Frequency: 80 GHz', 'Suitable for high temperature and pressure'],
      },
      {
        name: 'Ultrasonic Level Transmitters',
        description: 'Cost-effective non-contact level measurement for liquid and bulk solid applications. Easy installation and reliable performance.',
        specs: ['Range: 0.25m to 15m', 'Accuracy: ±0.25%', 'Output: 4-20mA, HART', 'IP67 housing'],
      },
      {
        name: 'Float & Displacement Level',
        description: 'Mechanical float switches and displacer-type level transmitters for reliable point and continuous level measurement in process vessels.',
        specs: ['Temperature: up to 400°C', 'Pressure: up to 400 bar', 'Material: SS316, Hastelloy, Titanium', 'Flange and thread connections'],
      },
    ],
  },
  {
    slug: 'analysis-measurement',
    title: 'Analysis Measurement',
    shortDescription: 'Gas and liquid analyzers for process quality monitoring and environmental compliance.',
    fullDescription: 'Process analysis instruments for real-time monitoring of gas and liquid composition. Our analyzers help maintain product quality, ensure safety and meet environmental regulatory requirements.',
    icon: 'FlaskConical',
    image: '/images/industries/chemical.jpg',
    subItems: [
      {
        name: 'Gas Analyzers',
        description: 'NDIR, electrochemical and zirconia oxygen analyzers for combustion control, emission monitoring and process gas analysis.',
        specs: ['Gases: O2, CO, CO2, NOx, SO2, CH4', 'Principles: NDIR, paramagnetic, electrochemical', 'Sampling systems available', 'ATEX certified options'],
      },
      {
        name: 'Liquid Analyzers',
        description: 'pH, conductivity, dissolved oxygen and turbidity analyzers for water treatment, chemical processing and food & beverage applications.',
        specs: ['Parameters: pH, ORP, conductivity, DO, turbidity', 'Self-cleaning sensors available', '4-20mA / HART output', 'ATEX and FDA compliant options'],
      },
      {
        name: 'Process Photometers',
        description: 'In-line photometric analyzers for concentration, color and turbidity measurement in liquid process streams.',
        specs: ['Wavelength: UV-Vis-NIR', 'Measurement: concentration, color, turbidity', 'Flow-through cell design', 'Automatic zero and calibration'],
      },
    ],
  },
  {
    slug: 'density-measurement',
    title: 'Density Measurement',
    shortDescription: 'Precision density meters and transmitters for process quality and interface detection.',
    fullDescription: 'Density measurement is essential for quality control, interface detection and custody transfer in oil & gas, chemical and food industries. Our densitometers provide accurate and reliable inline measurement.',
    icon: 'Scale',
    image: '/images/hero/hero-2.jpg',
    subItems: [
      {
        name: 'Coriolis Density Meters',
        description: 'Direct density measurement using Coriolis principle. Simultaneously measures mass flow, volume flow, density and temperature.',
        specs: ['Density range: 0.3 to 3 g/cm³', 'Accuracy: ±0.0005 g/cm³', 'Temperature: -50°C to +200°C', 'All-wetted 316L/Alloy C construction'],
      },
      {
        name: 'Nucleonic Density Gauges',
        description: 'Non-intrusive density measurement using gamma radiation. Ideal for slurry, paste and high-viscosity applications where contact measurement is not feasible.',
        specs: ['Density range: 0.5 to 4 g/cm³', 'Accuracy: ±0.002 g/cm³', 'Non-intrusive installation', 'Suitable for high-pressure vessels'],
      },
      {
        name: 'Vibrating Fork Density Meters',
        description: 'Inline density and viscosity measurement using vibrating fork technology. Compact design with fast response and excellent repeatability.',
        specs: ['Density range: 0.5 to 2.5 g/cm³', 'Accuracy: ±0.001 g/cm³', 'Viscosity compensation', 'Sanitary and industrial versions'],
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return measurementCategories.find((p) => p.slug === slug);
}

export const services = [
  {
    title: 'Measurement Solutions',
    description: 'Complete measurement system design, selection, sizing, installation and commissioning services. We help you choose the right technology and ensure accurate, reliable measurement throughout your plant.',
    icon: 'Settings',
  },
  {
    title: 'Project Execution Services',
    description: 'End-to-end project delivery from engineering design through procurement, installation, testing and handover. Our experienced team manages every aspect of your automation project.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'Discrete Automation',
    description: 'PLC/DCS based control systems, HMI/SCADA solutions and industrial networking for manufacturing and process industries. Complete automation from sensor to cloud.',
    icon: 'Cpu',
  },
];
