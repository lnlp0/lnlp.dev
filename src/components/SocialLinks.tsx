import React from 'react';
import { Github, Linkedin, Mail, Globe, Instagram } from 'lucide-react';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface SocialLinksProps {
  isVisible: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ isVisible }) => {
  const links: SocialLink[] = [
      { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/lnlp' },
      { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/lnlp0' },
      { name: 'Portfolio', icon: <Globe size={24} />, url: 'https://drive.google.com/file/d/1YdBqqnbJzRUrq3aiuMmAJMcspFyxBaMi/view?usp=sharing' },
      { name: 'Email', icon: <Mail size={24} />, url: 'mailto:me@lnlp.dev' },
      { name: 'Instagram', icon: <Instagram size={24} />, url: 'https://instagram.com/ckehdrb/' },
  ];
  return (
    <div 
      className={`flex flex-wrap justify-center gap-6 px-4 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {links.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-white transition-colors duration-300 hover:text-gray-300"
        >
          <div className="flex items-center justify-center w-12 h-12 mb-2 border border-white rounded-full">
            {link.icon}
          </div>
          <span className="text-sm font-light">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;