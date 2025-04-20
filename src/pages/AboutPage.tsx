import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import SocialIcons from '@/components/ui/SocialIcons';
import { FileText, Linkedin } from 'lucide-react';

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
                <h3 className="text-2xl font-bold mb-4 text-navy">My Education Background</h3>
                <div className="mb-6 border border-gray-200 rounded-lg p-4">
                  <div className="text-blue-700 font-bold text-lg mb-1">2022 – 2025</div>
                  <div className="text-lg font-semibold">BBA in Computational Business Analytics</div>
                  <div className="text-sm text-gray-600 mb-2">Mahindra University, Hyderabad, India</div>
                  <p className="text-gray-700 mt-2">
                    My academic experience at Mahindra University helped me build a solid foundation in business and data analytics.
                    <ul className="list-disc list-inside mt-2">
                      <li>Worked on group projects involving real-world business problems and data-driven solutions.</li>
                      <li>Participated in seminars and guest lectures by industry professionals.</li>
                      <li>Contributed to classroom discussions and team assignments focused on business strategy and analytics.</li>
                      <li>CGPA: 8.25</li>
                    </ul>
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-blue-700 font-bold text-lg mb-1">2020 – 2022</div>
                  <div className="text-lg font-semibold">Intermediate (MPC Stream)</div>
                  <div className="text-sm text-gray-600 mb-2">Sasi Junior College, Rajahmundry</div>
                  <p className="text-gray-700 mt-2">
                    Studied Mathematics, Physics, and Chemistry, with a focus on logical reasoning and quantitative aptitude.
                    <ul className="list-disc list-inside mt-2">
                      <li>Scored 955 / 1000 in MPC</li>
                      <li>Participated in subject-focused assessments and mock tests to build exam readiness.</li>
                    </ul>
                  </p>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="/assets/resume.pdf" className="btn-primary inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2" size={18} />
                    Download Resume
                  </a>
                  <a href="https://www.linkedin.com/in/yuktha-sri-bollina/" className="btn-accent inline-flex items-center" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" size={18} />
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-navy">Key Academic Focus Areas</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Programming with Python', grade: 'A' },
                  { title: 'DBMS with SQL', grade: 'A' },
                  { title: 'Data Warehousing & BI', grade: 'A' },
                  { title: 'Time Series Forecasting', grade: 'A+' },
                  { title: 'AI/ML for Decision Making', grade: 'A' },
                  { title: 'Macroeconomics', grade: 'A+' }
                ].map((subject, idx) => (
                  <div key={idx} className="bg-gray-50 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-base font-semibold text-navy mb-1">{subject.title}</h4>
                    <div className="bg-gray-100 px-3 py-1 rounded w-max text-sm font-medium">Grade: {subject.grade}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-navy hover:text-gold transition-colors">Video Introduction</h3>
          <p className="text-gray-700 mb-4">
            Watch this short video to get to know more about my academic journey and goals.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto pb-6 px-4">
          <video controls className="w-full rounded-lg shadow-lg max-h-[320px] object-cover">
            <source src="/assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
