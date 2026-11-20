// Data semua project. Tambah / edit project cukup di file ini.

export const projectFilters = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Development' },
  { key: 'software', label: 'Software Development' },
  { key: 'design', label: 'UI/UX Design' },
]

export const categoryLabel = {
  web: 'Web Development',
  software: 'Software Development',
  design: 'UI/UX Design',
}

const img = (folder, count) =>
  Array.from({ length: count }, (_, i) => `/assets/img/portfolio/${folder}/${folder}-${i + 1}.webp`)

export const projects = [
  {
    slug: 'sdi-web',
    category: 'web',
    thumbnail: '/assets/img/portfolio/web-app-5.webp',
    title: 'Sumber Data Indonesia Website',
    client: 'PT Sumber Data Indonesia',
    year: '2026',
    role: 'Web Developer',
    stack: ['Laravel', 'Tailwind CSS', 'PostgreSQL'],
    visibility: 'Public',
    summary: 'Corporate website built end to end, from database design to responsive frontend components.',
    images: img('sdi-web', 4),
    overview:
      'Full-stack development of the corporate website for PT Sumber Data Indonesia, built to strengthen the company’s digital credibility and present its enterprise solutions clearly.',
    challenge:
      'The company needed a fast, reliable, and fully responsive platform for its corporate offering. The key challenge was turning a polished visual design into a high-performance application with short load times and consistent behaviour across devices.',
    solution:
      'I owned the build end to end, from project structure and database design to dynamic frontend components. Clean coding standards and performance tuning resulted in a responsive platform that meets modern enterprise expectations.',
    link: { url: 'https://sdi.net.id/', label: 'Visit Live Site' },
  },
  {
    slug: 'asset-system',
    category: 'web',
    thumbnail: '/assets/img/portfolio/web-app-4.webp',
    title: 'Campus Asset Management System',
    client: 'Muhammadiyah University of Bandung',
    year: '2026',
    role: 'Full-Stack Developer',
    stack: ['CodeIgniter 3', 'Bootstrap 5', 'jQuery', 'MySQL'],
    visibility: 'Public',
    summary: 'Inventory platform with QR labelling and movement tracking for thousands of institutional assets.',
    images: img('asset-system', 5),
    overview:
      'A web-based inventory platform that centralises, organises, and monitors thousands of institutional assets in a single database.',
    challenge:
      'Asset tracking was manual, so identifying items and checking their status was slow and error-prone. Without a central system it was hard to keep an accurate master list or follow assets as they moved between units and rooms.',
    solution:
      'I built a QR code inventory system for fast identification and digital labelling, plus an Asset Movement Tracking module that records every relocation between units and rooms. A full change log for every status update gives the institution a reliable audit trail.',
    link: { url: 'https://kampusasset.id/', label: 'Visit Live Site' },
  },
  {
    slug: 'zetta',
    category: 'web',
    thumbnail: '/assets/img/portfolio/production-1.webp',
    title: 'Zetta-Net Website',
    client: 'PT Sumber Data Indonesia',
    year: '2025',
    role: 'Web Developer',
    stack: ['CodeIgniter 3', 'Bootstrap 4', 'PostgreSQL'],
    visibility: 'Public',
    summary: 'ISP website with a package catalogue and an online pre-survey form connected to the backend.',
    images: img('zetta', 4),
    overview:
      'Company website for Zetta-Net, an internet service provider, serving as the main digital channel for acquiring new customers and presenting its internet packages.',
    challenge:
      'Zetta-Net needed a site that was both professional and functional: one that explained complex service packages clearly, built trust with prospects, and replaced a manual pre-survey request process.',
    solution:
      'I built zetta.net.id from scratch with a clear user flow from browsing packages to submitting a pre-survey form, integrated directly with the backend. Lead intake became faster and far more structured.',
    link: { url: 'https://zetta.net.id/', label: 'Visit Live Site' },
  },
  {
    slug: 'asiagate',
    category: 'web',
    thumbnail: '/assets/img/portfolio/production-2.webp',
    title: 'Asiagate Website',
    client: 'PT Asiana Mika Indonesia',
    year: '2025',
    role: 'Web Developer',
    stack: ['CodeIgniter 3', 'Tailwind CSS', 'jQuery'],
    visibility: 'Public',
    summary: 'Responsive corporate website and service portal for an IT and telecommunications provider.',
    images: img('asiagate', 4),
    overview:
      'A modern, responsive company website that showcases Asiagate’s services and positions it as a credible IT and telecommunications solutions provider.',
    challenge:
      'The previous website was outdated, hard to update, and not mobile-friendly, which limited its ability to win corporate clients.',
    solution:
      'I designed and developed a new site from scratch with CodeIgniter 3, focusing on clean design, intuitive navigation, and fast performance. The fully responsive layout works well from desktop to mobile and makes it easy for prospects to get in touch.',
    link: { url: 'https://www.asiagate.co.id/', label: 'Visit Live Site' },
  },
  {
    slug: 'lovo',
    category: 'web',
    thumbnail: '/assets/img/portfolio/web-app-6.webp',
    title: 'Lovo Agency Website',
    client: 'Lovo Agency',
    year: '2025',
    role: 'Frontend Developer',
    stack: ['Bootstrap 5', 'jQuery'],
    visibility: 'Private',
    summary: 'Playful, animation-rich company profile that brings a 3D brand design to the web.',
    images: img('lovo', 4),
    overview:
      'A vibrant company profile website that expresses Lovo’s identity as an innovative, playful creative agency.',
    challenge:
      'As a new agency, Lovo needed a site that was informative and also captured its distinctive brand, with a landing page strong enough to leave a lasting first impression on prospective clients.',
    solution:
      'I translated rich 3D visual designs into a responsive, interactive website using Bootstrap and jQuery, making sure every visual element and animation rendered correctly across devices.',
    link: null,
  },
  {
    slug: 'hellocation',
    category: 'web',
    thumbnail: '/assets/img/portfolio/web-app-3.webp',
    title: 'Hellocation',
    client: 'PT Halo Edukasi Indonesia',
    year: '2024',
    role: 'Full-Stack Developer',
    stack: ['Laravel 10', 'Bootstrap 4', 'jQuery', 'MySQL'],
    visibility: 'Private',
    summary: 'Decision support system that ranks employee-of-the-period candidates using the SAW method.',
    images: img('hellocation', 5),
    overview:
      'A web-based Decision Support System (DSS) that helps HR select top-performing employees objectively using the Simple Additive Weighting (SAW) method.',
    challenge:
      'Employee selection was manual and subjective, which made it time-consuming and difficult to keep assessments fair and consistent across multiple criteria.',
    solution:
      'HR administrators can manage criteria, sub-criteria, and employee data, and the system calculates and ranks candidates automatically. Selection is now faster, more transparent, and data-driven.',
    link: null,
  },
  {
    slug: 'safezone',
    category: 'web',
    thumbnail: '/assets/img/portfolio/web-app-2.webp',
    title: 'SafeZone',
    client: 'Meadow Green Residence 3',
    year: '2023',
    role: 'Full-Stack Developer',
    stack: ['PHP', 'Laravel', 'Bootstrap 4', 'MySQL'],
    visibility: 'Private',
    summary: 'Residential security portal and information centre for a housing community.',
    images: img('safezone', 4),
    overview:
      'A web platform that serves as the information centre and security portal for the Meadow Green Residence 3 housing complex.',
    challenge:
      'Management needed more than a residential profile: a central portal where residents could find important information and staff could manage security data efficiently.',
    solution:
      'I built SafeZone with Laravel and MySQL, designing the security data model and a clean, easy-to-navigate interface for residents. It became a professional information hub and the foundation for a more structured security operation.',
    link: null,
  },
  {
    slug: 'simpati223',
    category: 'web',
    thumbnail: '/assets/img/portfolio/web-app-1.webp',
    title: 'Simpati 223',
    client: 'SMPN 223 Jakarta',
    year: '2023',
    role: 'Full-Stack Developer',
    stack: ['PHP', 'Bootstrap 4', 'MySQL'],
    visibility: 'Private',
    summary: 'Digital correspondence log for a school administration office, replacing handwritten records.',
    images: img('simpati223', 4),
    overview:
      'A web application that digitises the recording of incoming and outgoing correspondence for the administration office of SMPN 223 Jakarta.',
    challenge:
      'Letters were recorded by hand, which was slow, prone to data loss, and made archive searches difficult. The office needed one central system.',
    solution:
      'I built Simpati 223 from scratch in native PHP so administrators can record, search, and manage all correspondence archives easily. It improved day-to-day efficiency and reduced the risk of losing important documents.',
    link: null,
  },
  {
    slug: 'expert-system',
    category: 'software',
    thumbnail: '/assets/img/portfolio/desktop-app-2.webp',
    title: 'ARI Diagnosis Expert System',
    client: 'PMI Jakarta Selatan',
    year: '2024',
    role: 'Software Developer',
    stack: ['Java Swing', 'MySQL'],
    visibility: 'Private',
    summary: 'Desktop expert system that diagnoses acute respiratory infections using forward chaining.',
    images: img('expert-system', 5),
    overview:
      'A Java desktop application that helps Indonesian Red Cross (PMI) staff diagnose Acute Respiratory Infections (ARI) accurately using expert system methods.',
    challenge:
      'Field staff needed a fast, standardised tool for early ARI diagnosis. The manual process was slow and results varied between officers.',
    solution:
      'I developed a standalone Java Swing application that guides users through the diagnosis with forward chaining, delivers consistent results, and keeps a diagnosis history. Separate administrator and member roles keep the data secure and well organised.',
    link: null,
  },
  {
    slug: 'sipenja',
    category: 'software',
    thumbnail: '/assets/img/portfolio/desktop-app-1.webp',
    title: 'Sipenja',
    client: 'SMKN Al Hidayah 1',
    year: '2024',
    role: 'Software Developer',
    stack: ['Java Swing', 'MySQL'],
    visibility: 'Private',
    summary: 'Decision support system that selects KJP assistance recipients fairly using the SAW method.',
    images: img('sipenja', 4),
    overview:
      'A desktop Decision Support System that objectively selects students eligible for the KJP (Kartu Jakarta Pintar) assistance programme using the SAW method.',
    challenge:
      'The school needed a fair, transparent way to decide which students should receive KJP assistance. Manual selection across many variables was prone to bias and hard to justify.',
    solution:
      'I designed and built Sipenja so administrators can enter student data and assessment criteria, after which the system calculates scores and produces a ranked list of the most eligible recipients.',
    link: null,
  },
  {
    slug: 'sdi-figma',
    category: 'design',
    thumbnail: '/assets/img/portfolio/web-design-1.webp',
    title: 'Sumber Data Indonesia UI/UX',
    client: 'PT Sumber Data Indonesia',
    year: '2026',
    role: 'UI/UX Designer',
    stack: ['Figma', 'Wireframing', 'Prototyping'],
    visibility: 'Private',
    summary: 'Responsive interface design and interactive prototype for a corporate website.',
    images: img('sdi-figma', 4),
    overview:
      'A modern, responsive interface design for a corporate website, crafted to feel intuitive and to build digital authority.',
    challenge:
      'The company wanted a fresh digital identity. The challenge was presenting complex enterprise services through a clean, minimal design that communicates trust and clarity to a diverse corporate audience.',
    solution:
      'I produced wireframes, a component structure, and interactive prototypes, applying user-centred principles for clear information architecture, strong calls to action, and layouts that adapt from desktop to mobile.',
    link: null,
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
