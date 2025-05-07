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
    },
    {
      title: "Business Case Development",
      issuer: "Harvard ManageMentor",
      date: "Feb 2, 2025",
      description: "Recognizing a great opportunity to help your organization, but how do you communicate it? Learn how to create and present a compelling business case that aligns with your company’s strategic priorities.",
      badgeUrl: "/assets/business_development_case.png",
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
    </PageLayout>
  );
};

export default CertificationsPage;
