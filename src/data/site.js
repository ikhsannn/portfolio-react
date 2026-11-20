// Semua konten teks portofolio ada di sini, jadi gampang diedit tanpa nyentuh komponen.

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export const certificationsUrl =
  'https://drive.google.com/drive/u/0/folders/1d4-OIqHHMG0sltR76AMPLfRzUO3Et0Bq'

export const hero = {
  availability: 'Available for freelance & full-time roles',
  greeting: "Hi, I'm",
  name: 'Ikhsan Abdillah',
  typed: ['Full-Stack Web Developer', 'Software Engineer', 'UI/UX Designer'],
  description:
    'I build fast, reliable web applications with Laravel, CodeIgniter, and modern frontend tools, helping businesses and institutions turn manual processes into clean digital products.',
  photo: '/assets/img/ikhsan2.webp',
  stats: [
    { value: '5+', label: 'Years of experience' },
    { value: '11', label: 'Projects delivered' },
    { value: '9', label: 'Clients served' },
  ],
}

export const about = {
  headline: 'Full-stack developer with an eye for design.',
  paragraphs: [
    'I am a Full-Stack Web Developer based in Jakarta with more than five years of professional experience and a Bachelor’s degree in Informatics Engineering from Universitas Indraprasta PGRI.',
    'I design clean, modern interfaces and build robust backends with PHP, Laravel, and CodeIgniter. I enjoy working closely with clients and cross-functional teams to ship scalable solutions that solve real business problems.',
  ],
  facts: [
    { icon: 'bi-geo-alt', label: 'Location', value: 'Jakarta, Indonesia' },
    { icon: 'bi-mortarboard', label: 'Education', value: 'B.Comp.Sc. Informatics Engineering' },
    { icon: 'bi-envelope', label: 'Email', value: 'abdillahikhsan34@gmail.com' },
    { icon: 'bi-briefcase', label: 'Freelance', value: 'Available' },
  ],
  objective:
    'Currently open to roles and projects that combine full-stack development, software engineering, and UI/UX design.',
  cv: '/assets/resume/CVIkhsanAbdillah.pdf',
}

export const experience = [
  {
    role: 'Web Developer',
    period: 'Jun 2025 – Present',
    company: 'PT Sumber Data Indonesia',
    points: [
      'Design UI/UX wireframes and modern interfaces for web-based applications.',
      'Develop and redesign scalable web applications with PHP, CodeIgniter, and Laravel.',
      'Manage server deployment, maintenance, and code integration through CI/CD pipelines and SSH.',
    ],
  },
  {
    role: 'Software Engineer',
    period: 'Aug 2022 – Jan 2024',
    company: 'PT Anarya Teknologi Indonesia',
    points: [
      'Ran user interviews and translated requirements into functional software specifications.',
      'Designed, built, and tested applications from scratch against technical and business requirements.',
      'Handled maintenance, performance tuning, and bug fixing to keep applications stable.',
    ],
  },
  {
    role: 'PHP Programmer',
    period: 'Apr 2019 – Jun 2022',
    company: 'PT Khatulistiwa Mandala',
    points: [
      'Maintained and optimised existing web applications for performance and reliability.',
      'Developed backend services and web applications with native PHP and Laravel.',
      'Carried out testing, debugging, and iterative performance improvements.',
    ],
  },
]

export const education = [
  {
    role: 'Bachelor of Computer Science, Informatics Engineering',
    period: '2020 – 2024',
    company: 'Universitas Indraprasta PGRI, Jakarta',
    points: ['GPA 3.56 / 4.00'],
  },
]

export const organization = [
  {
    role: 'Head of Communication & Information Division',
    period: '2021 – 2023',
    company: 'Basketball Student Activity Unit, Universitas Indraprasta PGRI',
    points: [
      'Distributed training schedules and announcements through WhatsApp and Instagram.',
      'Planned and published consistent social media content to grow the club’s online presence.',
      'Designed posters and seasonal campaigns that increased member engagement.',
    ],
  },
]

const s = (file) => `/assets/img/skills/${file}`
export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'bi-window',
    items: [
      { name: 'HTML', icon: s('html5-brands.svg') },
      { name: 'CSS', icon: s('css3-alt-brands.svg') },
      { name: 'JavaScript', icon: s('js-brands.svg') },
      { name: 'Vue.js', icon: s('logo-vue-js.webp') },
      { name: 'Tailwind CSS', icon: s('logo-tailwind.webp') },
      { name: 'Bootstrap', icon: s('bootstrap-brands.svg') },
      { name: 'jQuery', icon: s('logo-jquery.webp') },
      { name: 'AJAX', icon: s('logo-ajax.webp') },
    ],
  },
  {
    title: 'Backend',
    icon: 'bi-server',
    items: [
      { name: 'PHP', icon: s('php-brands.svg') },
      { name: 'Laravel', icon: s('laravel-brands.svg') },
      { name: 'CodeIgniter', icon: s('ci-logo-big.webp') },
      { name: 'Golang', icon: s('logo-golang.webp') },
      { name: 'Java', icon: s('logo-java.webp') },
      { name: 'REST API', icon: s('icons8-rest-api.svg') },
      { name: 'GraphQL', icon: s('logo-graphql.webp') },
    ],
  },
  {
    title: 'Tools & Design',
    icon: 'bi-tools',
    items: [
      { name: 'Git', icon: s('logo-git.webp') },
      { name: 'GitHub', icon: s('github-brands.svg') },
      { name: 'CI/CD & SSH', icon: s('logo-ci-cd.webp') },
      { name: 'Figma', icon: s('logo-figma.webp') },
      { name: 'Canva', icon: s('logo-canva.webp') },
    ],
  },
]

export const services = [
  {
    icon: 'bi-globe2',
    title: 'Web Development',
    description: 'Fast, responsive, and scalable web applications built around your business goals.',
  },
  {
    icon: 'bi-cpu',
    title: 'Software Development',
    description: 'Reliable backend systems, APIs, and custom software for complex business logic.',
  },
  {
    icon: 'bi-bezier2',
    title: 'UI/UX Design',
    description: 'Intuitive interfaces and user flows designed in Figma, ready to hand off to development.',
  },
  {
    icon: 'bi-palette2',
    title: 'Graphic Design',
    description: 'Marketing visuals, branding assets, and social media content that stay on brand.',
  },
]

const t = (file) => `/assets/img/testimonials/${file}`
export const testimonials = [
  {
    quote:
      'Working with Ikhsan on the Hellocation project was a great experience. The application runs smoothly, every feature works as requested, and the results are highly reliable for our internal evaluations.',
    photo: t('testimonials-1.webp'),
    name: 'Widiya Hartati',
    title: 'HR, PT Halo Edukasi Indonesia',
  },
  {
    quote:
      'It was a pleasure working with Ikhsan. He executed our design flawlessly and contributed smart creative ideas that improved the user experience. He truly captured the cheerful vibe we wanted for Lovo.',
    photo: t('testimonials-2.webp'),
    name: 'Dudy Maulana',
    title: 'CEO & Founder, Lovo Agency',
  },
  {
    quote:
      'We needed a centralised, secure, and stable system, and Ikhsan delivered exactly that with SafeZone. The application is highly reliable for managing officer data and serves as our information centre.',
    photo: t('testimonials-3.webp'),
    name: 'Dian Novita',
    title: 'Management, Meadow Green Residence 3',
  },
  {
    quote:
      'We are very satisfied with Ikhsan’s work. The workflow, from the disease list to the diagnosis history, is clear and well structured. It is a practical desktop application that solves the problems we face in the field.',
    photo: t('testimonials-4.webp'),
    name: 'Ali Al Husaini',
    title: 'Leader, PMI Jakarta Selatan',
  },
  {
    quote:
      'Working with Ikhsan has been a great experience. He delivered a reliable, user-friendly asset management system that streamlined our administrative workflow.',
    photo: t('testimonials-5.webp'),
    name: 'Erfan Erfiansyah',
    title: 'Lecturer, Muhammadiyah University of Bandung',
  },
]

export const contact = {
  heading: "Have a project in mind? Let's build it together.",
  text: 'Tell me a little about your project or the role you are hiring for, and I will get back to you as soon as possible.',
  email: 'abdillahikhsan34@gmail.com',
  phone: '+62 896 0392 8198',
  phoneHref: 'tel:+6289603928198',
  location: 'Jakarta, Indonesia',
  socials: [
    { icon: 'bi-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ikhsannnn/' },
    { icon: 'bi-github', label: 'GitHub', href: 'https://github.com/ikhsannn' },
    { icon: 'bi-instagram', label: 'Instagram', href: 'https://www.instagram.com/iamikhsannn/' },
  ],
}
