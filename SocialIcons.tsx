
import { Github, Linkedin, Twitter, FileText } from 'lucide-react';
import { Instagram } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  iconClassName?: string;
}

const SocialIcons = ({ 
  className = "", 
  iconSize = 24,
  iconClassName = "text-navy hover:text-gold" 
}: SocialIconsProps) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <a 
        href="https://github.com/Yk0801" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`transition-colors duration-300 ${iconClassName}`}
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a 
        href="https://www.linkedin.com/in/yuktha-sri-bollina/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`transition-colors duration-300 ${iconClassName}`}
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a 
        href="https://instagram.com/yukthasri_bollina/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`transition-colors duration-300 ${iconClassName}`}
        aria-label="Instagram"
      >
        <Instagram size={iconSize} />
      </a>

      <a 
        href="/assets/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`transition-colors duration-300 ${iconClassName}`}
        aria-label="Resume"
      >
        <FileText size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
