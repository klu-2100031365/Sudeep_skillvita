import { Twitter, Github, Linkedin } from 'lucide-react';

// Profile Card Data Types
export interface SocialLink {
  id: string;
  icon: any;
  label: string;
  href: string;
}

export interface Performer {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks: SocialLink[];
  actionButton: {
    text: string;
    href: string;
  };
}

// Testimonial Data Types
export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

// Gallery Data Types
export interface GalleryItem {
  profileImage: string;
  name: string;
  feedback: string;
  mainImage: string;
}

// Event Winners
export const winners: Performer[] = [
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Alex Thompson',
    title: '1st Place Winner',
    bio: 'Built an AI-powered solution that revolutionized data processing.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sarah Martinez',
    title: '1st Place Winner',
    bio: 'Created a blockchain solution for supply chain transparency.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/56.jpg',
    name: 'James Wilson',
    title: '1st Place Winner',
    bio: 'Developed innovative healthcare app with real-time diagnostics.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/62.jpg',
    name: 'Maya Patel',
    title: '1st Place Winner',
    bio: 'Created intelligent chatbot using natural language processing.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
    name: 'Daniel Kim',
    title: '1st Place Winner',
    bio: 'Built real-time collaboration platform for remote teams.',
    socialLinks: [
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
    name: 'Rachel Green',
    title: '1st Place Winner',
    bio: 'Developed sustainable energy monitoring IoT solution.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/83.jpg',
    name: 'Marcus Johnson',
    title: '1st Place Winner',
    bio: 'Created AR application for interactive education.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/76.jpg',
    name: 'Nina Santos',
    title: '1st Place Winner',
    bio: 'Built machine learning model for predictive analytics.',
    socialLinks: [
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
    name: 'Kevin Zhang',
    title: '1st Place Winner',
    bio: 'Developed cybersecurity tool for threat detection.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
];

// Event Runners-Up
export const runners: Performer[] = [
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Emma Davis',
    title: '2nd Place',
    bio: 'Built a sustainable energy management platform.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/78.jpg',
    name: 'Michael Chen',
    title: '2nd Place',
    bio: 'Created an EdTech platform for personalized learning.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/88.jpg',
    name: 'Priya Sharma',
    title: '2nd Place',
    bio: 'Developed fintech solution for micro-businesses.',
    socialLinks: [
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
];

// Top Performers
export const topPerformers: Performer[] = [
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
    name: 'David Brown',
    title: 'Top Performer',
    bio: 'Outstanding contribution in mobile app development.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Isabella Garcia',
    title: 'Top Performer',
    bio: 'Exceptional work in UI/UX design and prototyping.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'Ryan Kumar',
    title: 'Top Performer',
    bio: 'Impressive problem-solving in backend architecture.',
    socialLinks: [
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
];

// Event Organizers
export const organizers: Performer[] = [
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
    name: 'Robert Anderson',
    title: 'Event Director',
    bio: 'Leading tech events and hackathons for 10+ years.',
    socialLinks: [
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Jennifer Lee',
    title: 'Operations Manager',
    bio: 'Expert in event logistics and community building.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
    name: 'Thomas Wright',
    title: 'Technical Lead',
    bio: 'Coordinating technical infrastructure for large-scale events.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Hire Me',
      href: 'https://skillvita.coursevita.com',
    },
  },
];

// Event Testimonials (Circular Carousel)
export const eventTestimonials: Testimonial[] = [
  {
    quote:
      "This hackathon was a game-changer! The mentorship provided was invaluable, and the networking opportunities were incredible. I walked away with new skills and lifelong connections.",
    name: "Sarah Johnson",
    designation: "Winner - AI Challenge",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The event organization was top-notch! From the opening ceremony to the final presentations, everything ran smoothly. The judges provided constructive feedback that helped us improve our project significantly.",
    name: "Michael Chen",
    designation: "Runner-Up - Web3 Track",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "An amazing experience! The challenges pushed us to think creatively, and the collaborative environment fostered innovation. Highly recommend this event to anyone looking to level up their skills.",
    name: "Emily Rodriguez",
    designation: "Top Performer",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "Best hackathon I've attended! The workshops and mentorship sessions were incredibly helpful. I learned so much in just 48 hours and got to work on cutting-edge technology.",
    name: "David Kumar",
    designation: "Participant",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
  },
];

// Event Gallery
export const galleryItems: GalleryItem[] = [
  {
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Anaam Farooq',
    feedback: "Amazing learning experience!",
    mainImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=1200&q=80',
  },
  {
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sarah Mitchell',
    feedback: 'The event exceeded all expectations',
    mainImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=60',
  },
  {
    profileImage: 'https://randomuser.me/api/portraits/men/56.jpg',
    name: 'James Wilson',
    feedback: 'Incredible networking opportunities',
    mainImage: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&w=800&h=1000&q=80',
  },
  {
    profileImage: 'https://randomuser.me/api/portraits/men/78.jpg',
    name: 'Michael Chen',
    feedback: 'Best tech event I have attended',
    mainImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=60',
  },
  {
    profileImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Emma Davis',
    feedback: 'Learned so much in just one day',
    mainImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&auto=format&fit=crop&q=60',
  },
  {
    profileImage: 'https://randomuser.me/api/portraits/women/88.jpg',
    name: 'Priya Sharma',
    feedback: 'Great speakers and content',
    mainImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&auto=format&fit=crop&q=60',
  },
  {
    profileImage: 'https://randomuser.me/api/portraits/men/21.jpg',
    name: 'David Brown',
    feedback: 'Inspiring and educational',
    mainImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=60',
  },
  {
    profileImage: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Isabella Garcia',
    feedback: 'Would highly recommend this event',
    mainImage: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&h=1200&q=80',
  },
];
