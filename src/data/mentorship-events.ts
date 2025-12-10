import { Twitter, Github, Linkedin } from 'lucide-react';
import { Performer, Testimonial } from './event-data';

export interface MentorshipEvent {
  id: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  heroImage: string;
  about: string;
  stats: {
    mentors: string;
    participants: string;
    support: string;
    satisfaction: string;
  };
  winners: Performer[];
  runners: Performer[];
  topPerformers: Performer[];
  organizers: Performer[];
  testimonials: Testimonial[];
}

export const mentorshipEvents: MentorshipEvent[] = [
  {
    id: '1',
    slug: 'mlrit-x-skillvita',
    title: 'MLRIT x Skillvita',
    date: 'March 15, 2024',
    description: 'Collaborative tech workshop with MLRIT focusing on cutting-edge technologies',
    image: '/images/events/image1.jpg',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=80',
    about: 'MLRIT x Skillvita was a groundbreaking collaboration bringing together students from Malla Reddy Institute of Technology and industry experts. This event focused on bridging the gap between academic learning and industry requirements through hands-on workshops, mentorship sessions, and real-world project development. Participants gained insights into modern tech stacks, best practices in software development, and career guidance from experienced professionals.',
    stats: {
      mentors: '20+',
      participants: '200+',
      support: '24/7',
      satisfaction: '96%'
    },
    winners: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Rahul Reddy',
        title: '1st Place Winner',
        bio: 'Built an innovative AI-powered campus management system.',
        socialLinks: [
          { id: 'github', icon: Github, label: 'GitHub', href: '#' },
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Hire Me', href: 'https://skillvita.coursevita.com' },
      },
      {
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Sneha Rao',
        title: '1st Place Winner',
        bio: 'Developed a student collaboration platform with real-time features.',
        socialLinks: [
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
          { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
        ],
        actionButton: { text: 'Hire Me', href: 'https://skillvita.coursevita.com' },
      },
    ],
    runners: [],
    topPerformers: [],
    organizers: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
        name: 'Dr. Vijay Kumar',
        title: 'Faculty Coordinator',
        bio: 'Leading tech education initiatives at MLRIT.',
        socialLinks: [
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Connect', href: '#' },
      },
    ],
    testimonials: [
      {
        quote: 'The MLRIT x Skillvita event was a perfect blend of learning and networking. The mentors were extremely helpful and the hands-on sessions were invaluable.',
        name: 'Karthik Sharma',
        designation: 'Participant',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '2',
    slug: 'designathon',
    title: 'Designathon',
    date: 'April 27, 2025',
    description: 'A 12-hour design sprint celebrating creativity and innovation',
    image: '/images/events/designathon2025.jpg',
    heroImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1400&q=80',
    about: 'Designathon is an intensive 12-hour design competition where creativity meets technology. Participants compete across three tracks: UI/UX Design, Social Media Content Creation, and Video Editing & Animation. This event celebrates International Design Day by bringing together designers, content creators, and video editors to solve real-world design challenges. With live mentorship, on-spot hiring opportunities, and exciting prizes, Designathon is the ultimate platform for creative professionals to showcase their talent.',
    stats: {
      mentors: '15+',
      participants: '150+',
      support: '12hrs',
      satisfaction: '98%'
    },
    winners: [],
    runners: [],
    topPerformers: [],
    organizers: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Priya Desai',
        title: 'Design Lead',
        bio: 'Award-winning designer with 8+ years of experience.',
        socialLinks: [
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
          { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
        ],
        actionButton: { text: 'Connect', href: '#' },
      },
    ],
    testimonials: [
      {
        quote: 'Designathon pushed my creative boundaries. The real-world challenges and expert feedback helped me grow as a designer.',
        name: 'Aditya Verma',
        designation: 'UI/UX Track Winner',
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '3',
    slug: 'snist-coursevita',
    title: 'SNIST x Coursevita',
    date: 'February 20, 2024',
    description: 'Technical workshop and mentorship program at SNIST',
    image: '/images/events/image2.jpg',
    heroImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1400&q=80',
    about: 'SNIST x Coursevita brought together students from Sreenidhi Institute of Science and Technology for an intensive learning experience. The event featured workshops on full-stack development, data science, and cloud computing. Industry mentors provided guidance on project development, best practices, and career planning. Students worked on real-world projects and received personalized feedback to enhance their skills.',
    stats: {
      mentors: '18+',
      participants: '180+',
      support: '24/7',
      satisfaction: '94%'
    },
    winners: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/men/56.jpg',
        name: 'Arjun Patel',
        title: '1st Place Winner',
        bio: 'Created a cloud-based student attendance system with ML.',
        socialLinks: [
          { id: 'github', icon: Github, label: 'GitHub', href: '#' },
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Hire Me', href: 'https://skillvita.coursevita.com' },
      },
    ],
    runners: [],
    topPerformers: [],
    organizers: [],
    testimonials: [
      {
        quote: 'The SNIST x Coursevita workshop was incredibly well-organized. I learned practical skills that I could immediately apply to my projects.',
        name: 'Meera Krishna',
        designation: 'Participant',
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '4',
    slug: 'klu-x-coursevita',
    title: 'KLU x Coursevita',
    date: 'January 10, 2024',
    description: 'Innovation and technology workshop at KL University',
    image: '/images/events/image3.jpg',
    heroImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1400&q=80',
    about: 'KLU x Coursevita was a comprehensive technology workshop held at KL University, focusing on emerging technologies and innovation. The event covered topics like blockchain, IoT, machine learning, and modern web development. Students participated in hands-on coding sessions, hackathon-style challenges, and one-on-one mentorship with industry experts. The program emphasized practical learning and real-world application of concepts.',
    stats: {
      mentors: '25+',
      participants: '250+',
      support: '24/7',
      satisfaction: '97%'
    },
    winners: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/women/62.jpg',
        name: 'Divya Srinivas',
        title: '1st Place Winner',
        bio: 'Developed IoT-based smart campus solution.',
        socialLinks: [
          { id: 'github', icon: Github, label: 'GitHub', href: '#' },
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Hire Me', href: 'https://skillvita.coursevita.com' },
      },
    ],
    runners: [],
    topPerformers: [],
    organizers: [],
    testimonials: [
      {
        quote: 'KLU x Coursevita opened my eyes to the possibilities in tech. The mentorship was outstanding and the projects were challenging in the best way.',
        name: 'Vikram Reddy',
        designation: 'Top Performer',
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '5',
    slug: 'vibecoding-1-0',
    title: 'Vibecoding 1.0',
    date: 'June 5, 2023',
    description: 'First edition of the community-driven coding event',
    image: '/images/events/image4.jpg',
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80',
    about: 'Vibecoding 1.0 marked the beginning of a unique coding community event series. This inaugural edition brought together developers, students, and tech enthusiasts for collaborative coding sessions, knowledge sharing, and networking. The event featured live coding challenges, pair programming sessions, and tech talks from industry professionals. It created a vibrant atmosphere where participants could learn, code, and connect with like-minded individuals.',
    stats: {
      mentors: '12+',
      participants: '100+',
      support: '8hrs',
      satisfaction: '92%'
    },
    winners: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
        name: 'Sai Kumar',
        title: '1st Place Winner',
        bio: 'Built a real-time code collaboration platform.',
        socialLinks: [
          { id: 'github', icon: Github, label: 'GitHub', href: '#' },
          { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
        ],
        actionButton: { text: 'Hire Me', href: 'https://skillvita.coursevita.com' },
      },
    ],
    runners: [],
    topPerformers: [],
    organizers: [],
    testimonials: [
      {
        quote: 'Vibecoding 1.0 had such a positive and energetic atmosphere. It felt less like a competition and more like a celebration of coding.',
        name: 'Ananya Joshi',
        designation: 'Participant',
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '6',
    slug: 'vibecoding-2-0',
    title: 'Vibecoding 2.0',
    date: 'November 12, 2023',
    description: 'Second edition with enhanced challenges and community engagement',
    image: '/images/events/image5.jpg',
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80',
    about: 'Vibecoding 2.0 expanded on the success of the first edition with more challenging problems, larger participant base, and enhanced mentorship support. This edition introduced multiple tracks including frontend, backend, and full-stack development. Participants enjoyed interactive workshops, real-world coding scenarios, and opportunities to showcase their projects. The event fostered a strong sense of community and collaborative learning.',
    stats: {
      mentors: '15+',
      participants: '150+',
      support: '10hrs',
      satisfaction: '95%'
    },
    winners: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
        name: 'Lakshmi Naidu',
        title: '1st Place Winner',
        bio: 'Created an innovative developer tools platform.',
        socialLinks: [
          { id: 'github', icon: Github, label: 'GitHub', href: '#' },
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Hire Me', href: 'https://skillvita.coursevita.com' },
      },
    ],
    runners: [],
    topPerformers: [],
    organizers: [],
    testimonials: [
      {
        quote: 'Vibecoding 2.0 was even better than the first! The challenges were tough but rewarding, and I learned so much from fellow participants.',
        name: 'Rohan Mehta',
        designation: 'Runner-Up',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '7',
    slug: 'cracking-the-fintech',
    title: 'Cracking the Fintech',
    date: 'September 8, 2023',
    description: 'Specialized workshop on fintech innovation and careers',
    image: '/images/events/image6.jpg',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1400&q=80',
    about: 'Cracking the Fintech was a specialized event focused on the intersection of finance and technology. Industry experts from leading fintech companies shared insights on payment systems, blockchain in finance, digital banking, and financial APIs. Participants learned about building secure financial applications, understanding regulatory compliance, and exploring career opportunities in fintech. The event included hands-on sessions on building payment integrations and analyzing financial data.',
    stats: {
      mentors: '10+',
      participants: '120+',
      support: '6hrs',
      satisfaction: '93%'
    },
    winners: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/men/83.jpg',
        name: 'Arun Krishnan',
        title: '1st Place Winner',
        bio: 'Built a blockchain-based payment verification system.',
        socialLinks: [
          { id: 'github', icon: Github, label: 'GitHub', href: '#' },
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Hire Me', href: 'https://skillvita.coursevita.com' },
      },
    ],
    runners: [],
    topPerformers: [],
    organizers: [],
    testimonials: [
      {
        quote: 'This event gave me a clear roadmap for breaking into fintech. The practical insights from industry professionals were invaluable.',
        name: 'Priyanka Singh',
        designation: 'Participant',
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '8',
    slug: 'lets-get-hired-1-0',
    title: "Let's Get Hired 1.0",
    date: 'March 25, 2023',
    description: 'Career preparation and job readiness workshop',
    image: '/images/events/image7.jpg',
    heroImage: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80',
    about: "Let's Get Hired 1.0 was designed to bridge the gap between academic preparation and industry requirements. The event featured resume building workshops, mock interviews, technical interview preparation, and networking sessions with recruiters from top tech companies. Participants received personalized feedback on their profiles and learned strategies to stand out in the competitive job market. Several attendees received interview calls and job offers through connections made at this event.",
    stats: {
      mentors: '20+',
      participants: '200+',
      support: '8hrs',
      satisfaction: '96%'
    },
    winners: [],
    runners: [],
    topPerformers: [],
    organizers: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/women/76.jpg',
        name: 'Anjali Reddy',
        title: 'Career Coach',
        bio: 'HR professional with 12+ years in tech recruitment.',
        socialLinks: [
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Connect', href: '#' },
      },
    ],
    testimonials: [
      {
        quote: "Let's Get Hired 1.0 completely changed my approach to job hunting. The mock interviews were incredibly helpful and I landed my dream job within a month!",
        name: 'Nikhil Gupta',
        designation: 'Participant',
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '9',
    slug: 'lets-get-hired-2-0',
    title: "Let's Get Hired 2.0",
    date: 'July 15, 2023',
    description: 'Advanced career development and placement support',
    image: '/images/events/image8.jpg',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=80',
    about: "Let's Get Hired 2.0 built upon the success of the first edition with more advanced content and direct placement opportunities. This edition included company-specific preparation sessions, system design workshops, and behavioral interview training. Multiple companies conducted on-spot interviews, and participants had direct access to hiring managers. The event also covered salary negotiation, offer evaluation, and career growth planning.",
    stats: {
      mentors: '25+',
      participants: '250+',
      support: '10hrs',
      satisfaction: '97%'
    },
    winners: [],
    runners: [],
    topPerformers: [],
    organizers: [],
    testimonials: [
      {
        quote: 'The on-spot interviews at Let\'s Get Hired 2.0 were a game-changer. I received two job offers on the same day!',
        name: 'Shreya Iyer',
        designation: 'Participant',
        src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
  {
    id: '10',
    slug: 'lets-get-hired-3-0',
    title: "Let's Get Hired 3.0",
    date: 'December 10, 2023',
    description: 'Comprehensive job readiness program with placement drives',
    image: '/images/events/image9.jpg',
    heroImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80',
    about: "Let's Get Hired 3.0 was the most comprehensive edition yet, featuring a full-day placement drive with 30+ participating companies. The event included specialized tracks for different experience levels - freshers, experienced professionals, and career switchers. Participants received intensive interview preparation, portfolio reviews, and LinkedIn profile optimization. The event resulted in the highest placement rate with over 60% of participants receiving job offers or progressing to final interview rounds.",
    stats: {
      mentors: '30+',
      participants: '300+',
      support: '12hrs',
      satisfaction: '98%'
    },
    winners: [],
    runners: [],
    topPerformers: [],
    organizers: [
      {
        avatarUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
        name: 'Rajesh Kumar',
        title: 'Placement Coordinator',
        bio: 'Connecting talent with opportunities for 15+ years.',
        socialLinks: [
          { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
        ],
        actionButton: { text: 'Connect', href: '#' },
      },
    ],
    testimonials: [
      {
        quote: 'Let\'s Get Hired 3.0 exceeded all my expectations. The variety of companies and the professional organization made it stand out from other placement drives.',
        name: 'Karan Malhotra',
        designation: 'Participant',
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
      },
    ],
  },
];

export function getEventBySlug(slug: string): MentorshipEvent | undefined {
  return mentorshipEvents.find(event => event.slug === slug);
}
