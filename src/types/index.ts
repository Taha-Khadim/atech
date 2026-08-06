// ── Page identifier for client-side routing ──
export type Page =
  | 'home'
  | 'festo'
  | 'products'
  | 'industries'
  | 'about'
  | 'contact'

// ── Navigation ──
export interface NavSubItem {
  label: string
  page: Page
}

export interface NavItem {
  label: string
  page: Page
  dropdown?: NavSubItem[]
}

// ── Industries ──
export interface Industry {
  name: string
  description: string
  image?: string
}

// ── Stats ──
export interface Stat {
  value: string
  label: string
}

// ── Certifications ──
export interface Certification {
  name: string
  scope: string
  type: string
  description?: string
}

// ── Brand ──
export interface Brand {
  title: string
  subtitle: string
  description: string
  color: string
  link?: string
  page?: Page
}

// ── Service ──
export interface Service {
  title: string
  description: string
}

// ── Measurement Category ──
export interface MeasurementType {
  title: string
  page: Page
}

// ── Product Category ──
export interface ProductCategory {
  title: string
  description: string
  image: string
  items: string[]
}

// ── Festo Product Section ──
export interface FestoProductSection {
  title: string
  description?: string
  image: string
  items: string[]
  link?: string
}

// ── Festo Authorization ──
export interface FestoAuthDetail {
  label: string
  value: string
}

// ── Leadership ──
export interface Leader {
  name: string
  role: string
  image?: string
}

// ── Why Choose Us ──
export interface WhyChooseItem {
  title: string
  description: string
}

// ── Contact Form ──
export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

// ── Contact Info ──
export interface ContactInfo {
  iconPath: string
  title: string
  value: string
  href?: string
}

// ── Industry Group ──
export interface IndustryGroup {
  title: string
  items: string[]
}
