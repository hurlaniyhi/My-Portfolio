import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import type { SocialLink } from '@/types/portfolio';

export const socialLinks: SocialLink[] = [
  { name: 'Facebook', url: 'https://www.facebook.com/hurlaniyhi/', icon: FaFacebook },
  { name: 'Instagram', url: 'https://www.instagram.com/hurlaniyhi/', icon: FaInstagram },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ridwan-kolawole-7b4931184/?originalSubdomain=ng',
    icon: FaLinkedin,
  },
  { name: 'Twitter', url: 'https://twitter.com/MisterJS', icon: FaTwitter },
  { name: 'GitHub', url: 'https://github.com/hurlaniyhi', icon: FaGithub },
];
