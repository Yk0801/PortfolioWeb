import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { FileText, Linkedin ,Video} from 'lucide-react';

const AboutPage = () => {
  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="About Me"
            subtitle="Discover my journey through business analytics, coding, and creative problem-solving."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-fade-in">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-8">
              {/* Education Section */}
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-navy animate-slide-up">My Education Background</h3>

                <div className="mb-6 border border-navy/20 rounded-lg p-5 shadow hover:shadow-lg transition-shadow animate-slide-up delay-100">
                  <div className="text-navy font-bold text-lg mb-1">2022 – 2025</div>
                  <div className="text-lg font-semibold text-navy">BBA in Computational Business Analytics</div>
                  <div className="text-sm text-navy/70 mb-2">Mahindra University, Hyderabad</div>
                  <p className="text-navy mt-2">
                    Currently pursuing my BBA in Computational Business Analytics with a CGPA of 8.25. My coursework has developed strong analytical and business decision-making skills across core areas such as data visualization, predictive modeling, and strategic thinking.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-navy">
                    <li>Worked on industry-level projects like market trend dashboards and cloud kitchen analysis</li>
                    <li>Developed BI solutions using Python, SQL, Power BI, and Excel</li>
                    <li>Built statistical models to support real-time business use cases</li>
                    <li>Engaged in seminars, business case competitions, and analytics forums</li>
                    <li>Collaborated in diverse teams to deliver data-driven insights and business strategies</li>
                  </ul>
                </div>

                <div className="border border-navy/20 rounded-lg p-5 shadow hover:shadow-lg transition-shadow animate-slide-up delay-200">
                  <div className="text-navy font-bold text-lg mb-1">2020 – 2022</div>
                  <div className="text-lg font-semibold text-navy">Intermediate (MPC Stream)</div>
                  <div className="text-sm text-navy/70 mb-2">Sasi Junior College, Rajahmundry</div>
                  <p className="text-navy mt-2">
                    Focused on Mathematics, Physics, and Chemistry, building a strong analytical and problem-solving base that later shaped my interest in technical business roles.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-navy">
                    <li>Scored 955/1000, consistently ranked among top academic performers</li>
                    <li>Participated in national-level mock tests and competitive entrance preparation</li>
                    <li>Developed logical reasoning and quantitative thinking through structured assessments</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-6 animate-slide-up delay-300">
                <a 
                  href="/assets/resume.pdf" 
                  className="btn-primary inline-flex items-center px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2" size={18} />
                  Download Resume
                </a>

                <a 
                  href="https://www.linkedin.com/in/yuktha-sri-bollina/" 
                  className="btn-accent inline-flex items-center px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2" size={18} />
                  LinkedIn Profile
                </a>

                <a 
                  href="https://www.linkedin.com/in/yuktha-sri-bollina/"  // Update this to your actual video link if needed
                  className="btn-accent inline-flex items-center px-4 py-2 rounded-md shadow hover:shadow-lg transition"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Video className="mr-2" size={18} />  {/* Replaced Linkedin with Video */}
                  Video Introduction
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4 animate-slide-up delay-400">
              <h3 className="text-xl font-bold text-navy mb-2">Key Focus Areas</h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Programming with Python', grade: 'A' },
                  { title: 'DBMS with SQL', grade: 'A' },
                  { title: 'Data Warehousing & BI', grade: 'A' },
                  { title: 'Time Series Forecasting', grade: 'A+' },
                  { title: 'AI/ML for Decision Making', grade: 'A' },
                  { title: 'Macroeconomics', grade: 'A+' }
                ].map((subject, idx) => (
                  <div 
                    key={idx} 
                    className="border border-navy/10 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition"
                  >
                    <h4 className="text-base font-semibold text-navy mb-1">{subject.title}</h4>
                    <div className="bg-[#fffbea] text-[#b39200] px-3 py-1 rounded w-max text-sm font-medium">
                      Grade: {subject.grade}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
