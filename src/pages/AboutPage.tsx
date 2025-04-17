import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import SocialIcons from '@/components/ui/SocialIcons';
import { FileText, Book, Linkedin } from 'lucide-react';

const AboutPage = () => {
  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="About Me"
            subtitle="Learn more about my background, skills, and academic journey."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-navy">My Background</h3>
                <p className="text-gray-700 mb-4">
                  I am a passionate data professional with a strong foundation in economics and statistics. My journey began with a deep interest in how data can drive decision-making and create value. Through my academic pursuits and professional experiences, I've developed a diverse skill set that spans data analysis, visualization, and interpretation.
                </p>
                
                <p className="text-gray-700 mb-4">
                  I hold a degree in [Your Degree] with a focus on data science and economics. My academic training has equipped me with both theoretical knowledge and practical skills that I've applied in various professional contexts.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Beyond my technical expertise, I'm a collaborative team player who thrives in dynamic environments. I'm constantly learning and exploring new technologies to enhance my capabilities and deliver better results.
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-navy">Core Competencies</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li>Data Analysis and Visualization</li>
                  <li>Statistical Modeling</li>
                  <li>Programming (Python, R, SQL)</li>
                  <li>Machine Learning Fundamentals</li>
                  <li>Economic Analysis</li>
                  <li>Project Management</li>
                </ul>
                
                <div className="flex space-x-4 mt-6">
                  <a 
                    href="/assets/resume.pdf" 
                    className="btn-primary inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2" size={18} />
                    Download Resume
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/yuktha-sri-bollina/" 
                    className="btn-accent inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2" size={18} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden mb-8 group relative">
                <img 
                  src="/assets/pic.png" 
                  alt="Your Name" 
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="bg-navy text-white p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4 text-gold">Contact Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a href="mailto:yukthasri005@gmail.com" className="hover:text-gold transition-colors">yukthasri005@gmail.com</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📱</span>
                    <a href="tel:+917032180080" className="hover:text-gold transition-colors">7032180080</a>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📍</span>
                    <span>Hyderabad</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mt-6 mb-4 text-gold">Connect With Me</h3>
                <SocialIcons iconClassName="text-white hover:text-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Academic Background"
            subtitle="Core coursework and educational achievements"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Spreadsheets Course */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Book className="text-gold mr-3" size={24} />
                <h3 className="text-xl font-bold">Spreadsheets</h3>
              </div>
              <p className="text-gray-700 mb-3">Advanced data analysis and modeling using spreadsheet applications.</p>
              <div className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">Grade: A</p>
                <p className="text-sm text-gray-600">Top 5% of class</p>
              </div>
            </div>
            
            {/* Economics Course */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Book className="text-gold mr-3" size={24} />
                <h3 className="text-xl font-bold">Economics</h3>
              </div>
              <p className="text-gray-700 mb-3">Micro and macroeconomic principles with focus on data-driven analysis.</p>
              <div className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">Grade: A-</p>
                <p className="text-sm text-gray-600">Research project recognized by faculty</p>
              </div>
            </div>
            
            {/* Statistics Course */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                <Book className="text-gold mr-3" size={24} />
                <h3 className="text-xl font-bold">Statistics</h3>
              </div>
              <p className="text-gray-700 mb-3">Statistical methods, probability theory, and practical data analysis.</p>
              <div className="bg-gray-100 p-3 rounded">
                <p className="font-semibold">Grade: A</p>
                <p className="text-sm text-gray-600">Awarded for outstanding project work</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-navy hover:text-gold transition-colors">Video Introduction</h3>
              <p className="text-gray-700 mb-4">
                Watch this brief introduction to learn more about my background, skills, and aspirations.
              </p>
            </div>
            
            <div className="aspect-w-16 aspect-h-9">
              <video 
                controls 
                className="w-full h-full object-cover"
              >
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
