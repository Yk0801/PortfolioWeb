
import PageLayout from '@/components/layout/PageLayout';
import SocialIcons from '@/components/ui/SocialIcons';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const SummaryPage = () => {
  return (
    <PageLayout>
      <section className="min-h-screen relative flex items-center bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-navy block">Hello, I'm</span>
                <span className="text-gold">Bollina Yuktha Sri</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                A dedicated professional with expertise in Business analytics, and economics. 
                Passionate about leveraging data to drive insights and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/about" className="btn-primary">
                  Learn More
                </Link>
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-accent">
                  Download Resume
                </a>
              </div>
              
              <SocialIcons />
            </div>
            
            <div className="lg:w-1/2 flex justify-center animate-slide-in">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold">
                <img 
                  src="/assets/pic3.jpg" 
                  alt="Yuktha Sri" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <a 
            href="#statement" 
            className="text-navy hover:text-gold transition-colors flex flex-col items-center"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </section>
      
      <section id="statement" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">Purpose of Portfolio</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <p className="text-lg text-gray-700 mb-4">
                Hey! I’m Yuktha Sri Bollina, from the beautiful town of Rajahmundry — a place that taught me to stay calm, be curious, and enjoy the small things in life.
              </p>
              
              <p className="text-lg text-gray-700 mb-4">
                Right now, I’m studying Computational Business Analytics, where I combine my love for numbers, logic, and business. I enjoy working with tools like Power BI and Python to turn messy data into something meaningful.
              </p>

              <p className="text-lg text-gray-700 mb-4">
                Outside academics, I like listening to business podcasts — it’s interesting to see how businesses grow and adapt. I also enjoy playing chess with friends (it sharpens my thinking) and cooking in my free time (just for fun and a break!).
              </p>

              <p className="text-lg text-gray-700">
                This portfolio is a small space where I share my journey — the things I’ve tried, learned, and built. It’s not perfect, but it’s real — just like me.
              </p>

            </div>
            
            <div className="mt-10">
              <Link to="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SummaryPage;
