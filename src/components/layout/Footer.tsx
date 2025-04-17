
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Yuktha Sri</h3>
            <p className="text-gray-300 mb-4">
              Showcasing my professional journey, projects, and achievements.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Yk0801/" className="text-white hover:text-gold transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yuktha-sri-bollina/" className="text-white hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/yukthasri_bollina/" className="text-white hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>

              <a href="mailto:yukthasri005@gmail.com" className="text-white hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-gold transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-300 hover:text-gold transition-colors">Certifications</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Bollina Yuktha Sri</p>
              <p className="mb-2">Hyderabad.</p>
              <p className="mb-2">
                <a href="mailto:yukthasri005@gmail.com" className="hover:text-gold transition-colors">
                  yukthasri005@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+917032180080" className="hover:text-gold transition-colors">
                  Phone: 7032180080
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Yuktha's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
