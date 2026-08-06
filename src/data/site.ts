import type {
  Industry,
  Stat,
  Certification,
  Brand,
  Service,
  MeasurementType,
  ProductCategory,
  FestoProductSection,
  FestoAuthDetail,
  Leader,
  WhyChooseItem,
  ContactInfo,
  IndustryGroup,
} from '@/types'

// ── Industries ──
export const INDUSTRIES: Industry[] = [
  { name: 'Oil & Gas', description: 'Process valve assemblies and control systems for upstream, midstream, and downstream operations.', image: '/images/industries/oil-gas.jpg' },
  { name: 'Chemical', description: 'Corrosion-resistant automation solutions for chemical processing and petrochemical plants.', image: '/images/industries/chemical.jpg' },
  { name: 'Food & Beverage', description: 'Hygienic automation components meeting food-grade standards for packaging and processing.', image: '/images/industries/generic.jpg' },
  { name: 'Water & Wastewater', description: 'Reliable valve automation and flow control for water treatment and distribution systems.', image: '/images/industries/generic.jpg' },
  { name: 'Pharmaceutical', description: 'Precision control solutions for biotech, pharmaceutical, and cosmetic manufacturing processes.', image: '/images/industries/generic.jpg' },
  { name: 'Automotive & Transportation', description: 'High-speed pneumatic and electric automation for automotive assembly and manufacturing lines.', image: '/images/industries/generic.jpg' },
  { name: 'Pulp & Paper', description: 'Robust automation components for the demanding pulp and paper production environment.', image: '/images/industries/pulp-paper.jpg' },
  { name: 'Power', description: 'Automation solutions for power generation, hydrogen, and renewable energy systems.', image: '/images/industries/power.jpg' },
  { name: 'Mining', description: 'Heavy-duty valve assemblies and actuators for mining and mineral processing.', image: '/images/industries/generic.jpg' },
  { name: 'Factory Automation', description: 'Precision handling and cleanroom-compatible automation for electronics manufacturing.', image: '/images/industries/generic.jpg' },
  { name: 'Renewable Energy', description: 'Automation solutions for solar, wind, hydrogen and renewable energy systems.', image: '/images/industries/generic.jpg' },
  { name: 'Data Centers', description: 'Reliable cooling and power management automation for data center facilities.', image: '/images/industries/generic.jpg' },
  { name: 'Cement', description: 'Heavy-duty automation components for cement production and processing plants.', image: '/images/industries/generic.jpg' },
  { name: 'Iron & Steel', description: 'Robust valve assemblies and actuators for iron and steel manufacturing plants.', image: '/images/industries/generic.jpg' },
]

// ── Process Industries & Factory Automation groupings ──
export const INDUSTRY_GROUPS: IndustryGroup[] = [
  {
    title: 'Process Industries',
    items: ['Oil & Gas', 'Chemicals', 'Food & Beverage', 'Water & Wastewater', 'Pharma & Cosmetics', 'Power & Energy', 'Pulp & Paper', 'Mineral Processing'],
  },
  {
    title: 'Factory Automation',
    items: ['Automotive', 'Electronics & Assembly', 'Food & Packaging', 'Laboratory Automation', 'Biotech-Pharma', 'Medical Technology', 'Intralogistics', 'Technical Education'],
  },
]

// ── Festo Stats ──
export const FESTO_STATS: Stat[] = [
  { value: '3.2 Bn Euro', label: 'Annual Turnover' },
  { value: '20,100+', label: 'Employees' },
  { value: '300,000+', label: 'Customers' },
  { value: '176', label: 'Countries' },
  { value: '33,000+', label: 'Catalogue Products' },
  { value: '100+', label: 'Patents/Year' },
  { value: '61', label: 'Subsidiaries' },
  { value: '24h', label: 'Delivery' },
  { value: '15,000+', label: 'Solutions/Year' },
  { value: '1,000+', label: 'Sales Engineers' },
]

// ── Festo Certifications ──
export const FESTO_CERTIFICATIONS: Certification[] = [
  { name: 'ISO 9001', scope: 'All Plants', type: 'Management' },
  { name: 'ISO 14001', scope: 'All Plants', type: 'Management' },
  { name: 'OHSAS 18001', scope: 'Sao Paulo & Shanghai', type: 'Management' },
  { name: 'CE', scope: 'Europe', type: 'Product', description: 'Safety, EMC, Machinery, Ex-Protection' },
  { name: 'UL', scope: 'North America', type: 'Product', description: 'Industrial equipment safety' },
  { name: 'CSA', scope: 'Canada', type: 'Product', description: 'Industrial equipment safety' },
  { name: 'CCC', scope: 'China', type: 'Product', description: 'EMC & electrical safety' },
  { name: 'EAC (GOST)', scope: 'Eurasian Union', type: 'Product', description: 'Safety & Ex-Protection' },
  { name: 'GL', scope: 'Ships/Offshore', type: 'Product', description: 'Ship/offshore equipment' },
  { name: 'C-Tick', scope: 'Australia', type: 'Product', description: 'Industrial equipment EMC' },
]

// ── Festo Product Sections ──
export const FESTO_PRODUCTS: FestoProductSection[] = [
  {
    title: 'Pneumatic Cylinders',
    image: '/images/festo/FESTOpnumatic.jpg',
    link: 'https://www.festo.com/us/en/c/products/actuators-and-drives/pneumatic-cylinders-id_pim135',
    items: ['Piston Rod Cylinders', 'Rodless Cylinders', 'Rotary Actuators', 'Specialty Actuators', 'Guided Cylinders', 'Stopper Cylinder and Feed Separator', 'Clamp Cylinders', 'Industrial Shock Absorber', 'Rotary Indexing Table'],
  },
  {
    title: 'Electromechanical Actuators',
    image: '/images/festo/ELECTRO.jpg',
    link: 'https://www.festo.com/us/en/c/products/actuators-and-drives/electromechanical-actuators-id_pim138',
    items: ['Linear Axes', 'Electric Cylinders and Slides', 'Integrated Electromechanical Actuators', 'Electric Rotary Actuators', 'Electric Stoppers', 'Electric Handling Modules', 'Accessories for Electric Actuators'],
  },
  {
    title: 'Servopneumatic Positioning Systems',
    image: '/images/festo/servo.jpg',
    link: 'https://www.festo.com/us/en/c/products/actuators-and-drives/servopneumatic-positioning-systems-id_pim140',
    items: ['Actuators with Feedback', 'Servo Pneumatic Controllers', 'Linear Measuring Systems', 'Proportional Directional Valves', 'Signal Convertors', 'Cables and Accessories'],
  },
  {
    title: 'Valves and Valve Manifolds',
    image: '/images/festo/VALVES.jpg',
    link: 'https://www.festo.com/us/en/c/products/valves-and-valve-manifolds-id_pim201',
    items: ['Directional Control Valves', 'Mechanical & Hand Operated Valves', 'Shut Off Valves Pneumatic', 'Pressure Valves', 'Flow Control Valves', 'Proportional Valves', 'Piezo Valves', 'Process Valves', 'Pneumatic Controls', 'Valve Terminals', 'Accessories for Pneumatic Valves'],
  },
]

// ── Festo Authorization Details ──
export const FESTO_AUTH_DETAILS: FestoAuthDetail[] = [
  { label: 'Signed by:', value: 'Zaid Dababneh, Head of Sales, ME & NE Africa' },
  { label: 'Valid Through:', value: 'December 31st, 2026' },
  { label: 'Issued by:', value: 'Festo Sanayi ve Ticaret A.S., Istanbul' },
  { label: 'Territory:', value: 'Pakistan' },
]

// ── Brands ──
export const BRANDS: Brand[] = [
  {
    title: 'FESTO',
    subtitle: 'Authorized Distributor',
    description: 'World-leading supplier of industrial automation with 33,000+ products, 100+ patents/year, presence in 176 countries.',
    color: '#00aa73',
    link: 'https://www.festo.com',
    page: 'festo',
  },
  {
    title: 'EMERSON',
    subtitle: 'Technology Partner',
    description: 'Global technology and engineering leader providing innovative solutions for industrial, commercial, and residential markets.',
    color: '#1c1c1c',
    link: 'https://www.emerson.com',
    page: 'home',
  },
  {
    title: 'AUTOMATION TECHNOLOGY',
    subtitle: 'Custom Solutions',
    description: 'In-house engineering and integration services for custom automation, system design, and technical training in Pakistan.',
    color: '#0066cc',
    page: 'about',
  },
]

// ── Services ──
export const SERVICES: Service[] = [
  { title: 'Product Distribution', description: 'Authorized Festo distributor with 24h delivery and 33,000+ catalogue components available in Pakistan.' },
  { title: 'System Integration', description: 'Custom valve assemblies, pneumatic control cabinets, and complete automation systems tailored to your needs.' },
  { title: 'Technical Support', description: 'On-site commissioning, staff training, and third-party PLC integration support across Pakistan.' },
  { title: 'After-Sales Service', description: 'FAT testing, freight management, spare parts, and ongoing maintenance support.' },
]

// ── Measurement Types (Home Page finder) ──
export const MEASUREMENT_TYPES: MeasurementType[] = [
  { title: 'Pressure Measurement', page: 'products' },
  { title: 'Temperature Measurement', page: 'products' },
  { title: 'Flow Measurement', page: 'products' },
  { title: 'Level Measurement', page: 'products' },
  { title: 'Analysis Measurement', page: 'products' },
  { title: 'Density Measurement', page: 'products' },
]

// ── Pressure Products ──
export const PRESSURE_PRODUCTS: ProductCategory[] = [
  {
    title: 'Pressure Gauges',
    description: 'Gauge Pressure transmitters compare a pressure relative to atmospheric measure.',
    image: '/images/products/pgaute-2.jpg',
    items: ['Industrial Pressure Gauge with Glycerin Filled', 'Vacuum Pressure Gauge', 'Diaphragm Pressure Gauge', 'Differential Pressure Gauge', 'Electric Contact Pressure Gauge', 'Digital Pressure Gauge', 'Manometer & Macleod Gauge', 'Digital Manometer'],
  },
  {
    title: 'Pressure Transmitter',
    description: 'A pressure transmitter is a device used to measure and transmit fluid or gas pressure in a pipeline, tank, or vessel to a control system or display device.',
    image: '/images/products/pt-1.jpg',
    items: ['Differential Pressure Transmitter - DPT', 'Mini Differential Pressure Transmitter', 'Pressure Indicator Transmitter PIT-S', 'Pressure Indicator Transmitter PIT-F', 'Mini Pressure Indicator Transmitter LCD', 'Mini Pressure Indicator Transmitter LED', 'Pressure Indicator Transmitter with Capillary'],
  },
  {
    title: 'Pressure Sensors and Transducers',
    description: 'Automation Technology proudly offers a complete selection of pressure sensors and pressure transducers.',
    image: '/images/products/ptranducer-1.jpg',
    items: ['PTE Series Pressure Sensors', 'Smart Metering Pressure Sensors', 'Differential Pressure Sensor', 'Differential Pressure Transducer', 'Pressure and Temperature Transmitter', 'Capacitive Pressure Transducers', 'Strain Gauge Pressure Transducers'],
  },
  {
    title: 'Pressure Switch',
    description: 'A pressure switch opens or closes a corresponding switch contact as soon as a preset pressure is reached.',
    image: '/images/products/pgaute-1.jpg',
    items: ['Electronic Pressure Switch', 'OEM Pressure Switch with Display', 'Diaphragm Pressure Switch', 'Compact Pressure Switch'],
  },
]

// ── Temperature Products ──
export const TEMPERATURE_PRODUCTS: ProductCategory[] = [
  {
    title: 'Temperature Transmitters',
    description: 'Temperature transmitters feature significant advances over direct wired counterparts. Eliminate special cabling requirements, simplify engineering and maintenance while enabling advanced diagnostics. Automation Technology offers head-mount, panel-mount, and field-mount devices to cover different temperature applications.',
    image: '/images/products/temp-transmit.jpg',
    items: ['Field Mount', 'Head Mount', 'Panel Mount'],
  },
  {
    title: 'Temperature Controllers',
    description: 'Temperature controllers are used to maintain a constant temperature (the target) in furnaces and other equipment. Generally, they include a measured input indicator and a setpoint controller. They generate a control signal according to the difference between the indicated value (measured input) and target value, and adjust the temperature to match the target.',
    image: '/images/products/controler.jpg',
    items: ['On-Off Controllers', 'Proportional (P) Controllers', 'PID Controllers'],
  },
]

// ── Company Stats (About page) ──
export const COMPANY_STATS: Stat[] = [
  { value: '2010', label: 'Founding Year' },
  { value: '2,000+', label: 'Happy Customers' },
  { value: '190', label: 'Companies Work With Us' },
  { value: '2', label: 'Offices' },
  { value: '21', label: 'Team Members' },
  { value: '750', label: 'Projects Completed' },
]

// ── Leadership ──
export const LEADERS: Leader[] = [
  { name: 'Ghulam Sarwar Khan', role: 'CEO / Founder', image: '/images/leaders/ghulam-sarwar.jpg' },
  { name: 'Emaad Yaseen Saeed', role: 'Director', image: '/images/leaders/emaad-yasin.jpg' },
  { name: 'Braydon Wilkerson', role: 'Technical Engineer', image: '/images/leaders/braydon.jpg' },
  { name: 'Kristin Watson', role: 'Support', image: '/images/leaders/kristin.jpg' },
]

// ── Why Choose Us ──
export const WHY_CHOOSE_US: WhyChooseItem[] = [
  { title: 'Authorized Distributor', description: 'Officially authorized by Festo for complete product range in Pakistan with direct HQ access.' },
  { title: 'Engineering Expertise', description: 'Engineers trained by Festo for system design, integration, and troubleshooting.' },
  { title: 'Comprehensive Solutions', description: 'From components to complete engineered systems, turnkey solutions tailored to requirements.' },
  { title: 'Local Presence', description: 'Based in Lahore with on-site support, training, and commissioning across Pakistan.' },
  { title: 'Global Backing', description: 'Festo network of 250+ offices in 61 countries, ensuring reliable supply chain.' },
  { title: 'Quality Assurance', description: 'Full Festo warranties: ISO 9001, ISO 14001, CE, UL, CSA, and industry approvals.' },
]

// ── Contact Info ──
export const CONTACT_INFO: ContactInfo[] = [
  {
    iconPath: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
    title: 'Office Address',
    value: 'S-42, 2nd Floor, Gulberg Center, Main Boulevard, Gulberg-III Lahore-54660-Pakistan',
  },
  {
    iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    title: 'Phone',
    value: '+92-42-35750039',
    href: 'tel:+924235750039',
  },
  {
    iconPath: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    value: 'Info@automationtechnology.com.pk',
    href: 'mailto:Info@automationtechnology.com.pk',
  },
  {
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Business Hours',
    value: 'Monday - Saturday: 9:00 AM - 6:00 PM',
  },
]

// ── CSS utility constants ──
export const CONTAINER = 'mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8'
export const LABEL_UPPER = 'text-[12px] font-normal uppercase tracking-[0.15em]'
export const HEADING2_UPPER = 'text-[12px] font-semibold uppercase tracking-[0.15em]'
