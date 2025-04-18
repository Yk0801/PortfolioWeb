import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import RecommendationCard from '@/components/ui/RecommendationCard';
import { FileText } from 'lucide-react';

const RecommendationsPage = () => {
  // Sample recommendations data
  const recommendations = [
    {
      content: "I had the pleasure of mentoring Yuktha during her internship, and I was consistently impressed by her dedication, curiosity, and ability to quickly grasp complex concepts. Coming from a BBA background with a strong technical foundation, she stood out for her unique blend of business acumen and analytical skills.",
      author: "Babasaheb R Mane",
      role: "Data Scientist",
      company: "Prolifics.",
      pdfUrl: "https://www.linkedin.com/in/yuktha-sri-bollina/details/recommendations/"
    }
    // {
    //   content: "As their professor for Advanced Statistical Methods, I was consistently impressed by their intellectual curiosity and rigorous approach to problem-solving. They demonstrated an exceptional ability to apply theoretical concepts to practical scenarios and showed outstanding initiative in their research project.",
    //   author: "Dr. Robert Johnson",
    //   role: "Professor of Statistics",
    //   company: "University Name",
    //   pdfUrl: "#"
    // },
    // {
    //   content: "I've had the opportunity to collaborate with them on several campus initiatives where they served as a Campus Ambassador. Their communication skills, leadership abilities, and dedication to excellence were evident in every project. They have a natural talent for engaging diverse audiences and building relationships.",
    //   author: "Michael Chen",
    //   role: "Student Activities Director",
    //   company: "University Name",
    //   pdfUrl: "#"
    // }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Recommendations"
            subtitle="Professional endorsements from mentors, professors, and supervisors."
          />
          
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16">
            {recommendations.map((recommendation, index) => (
              <RecommendationCard key={index} {...recommendation} />
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-gold">
                <FileText size={24} />
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-navy mb-3">Request a Recommendation</h3>
                <p className="text-gray-700 mb-4">
                  If you've worked with me and would like to provide a recommendation, I would greatly appreciate your insights and feedback. Please feel free to reach out via email or LinkedIn.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Contact via Email
                  </a>
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent inline-flex items-center justify-center"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RecommendationsPage;
