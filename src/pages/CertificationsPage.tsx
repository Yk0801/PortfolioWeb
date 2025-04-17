import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import CertificationCard from '@/components/ui/CertificationCard';

const CertificationsPage = () => {
  // Sample certification data
  const certifications = [
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "December 2023",
      description: "Comprehensive program covering data science methodology, tools, and techniques including Python programming, data analysis, visualization, machine learning, and more.",
      badgeUrl: "/assets/ibm_data_science_certificate.png",
      verificationUrl: "https://drive.google.com/file/d/1ZOf3hmikuCJV2A5x6zUDbT4lpwpE9lIA/view?usp=sharing"
    },
    {
      title: "NSE Certified Market Professional",
      issuer: "National Stock Exchange",
      date: "August 2023",
      description: "Certification demonstrating proficiency in financial markets, trading mechanisms, and securities analysis.",
      badgeUrl: "/assets/nse_certificate.png",
      verificationUrl: "https://drive.google.com/file/d/1rT9FAd5s2yBanBP0lgjjn99oaPC4x97O/view?usp=sharing"
    },
    {
      title: "Macro Economics for Business Management",
      issuer: "FUNDACAO INSTITUTO DE ADMINISTRACAO",
      date: "Feb 24, 2023",
      description: "Mastery of advanced Excel functions, pivot tables, data modeling, and business intelligence features.",
      badgeUrl: "/assets/COURSE_CERTIFICATE_YUKTHA.png",
      verificationUrl: "https://drive.google.com/file/d/1ouwNfHMJe2XXfY4fChASuQHIVu3xsWqo/view?usp=sharing"
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Certifications & Credentials"
            subtitle="Professional certifications that validate my skills and expertise."
          />
          
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* 
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Continuing Education"
            subtitle="My commitment to ongoing learning and professional development."
            centered={true}
          />
          
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-navy">Learning Journey</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-navy">Currently Learning</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Deep Learning Specialization</p>
                      <p className="text-gray-600 text-sm">Advancing my machine learning skills with neural networks and deep learning techniques.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold flex items-center justify-center mt-1">
                      <span className="text-white text-sm">▶</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Advanced Financial Modeling</p>
                      <p className="text-gray-600 text-sm">Enhancing my financial analysis capabilities with complex modeling techniques.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3 text-navy">Future Learning Goals</h4>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mt-1">
                      <span className="text-white text-sm">○</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Cloud Computing Certification</p>
                      <p className="text-gray-600 text-sm">Planning to gain expertise in cloud platforms for data science applications.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center mt-1">
                      <span className="text-white text-sm">○</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Big Data Technologies</p>
                      <p className="text-gray-600 text-sm">Expanding knowledge in Hadoop, Spark, and other big data frameworks.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-700 italic">
                "Learning is not attained by chance, it must be sought for with ardor and diligence." — Abigail Adams
              </p>
            </div>
          </div>
        </div>
      </section>
      */}

    </PageLayout>
  );
};

export default CertificationsPage;
