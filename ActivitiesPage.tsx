import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar, Users, Award } from 'lucide-react';

const ActivitiesPage = () => {
  const ambassadorRole = {
    title: "Campus Ambassador",
    organization: "Mahindra University",
    period: "January 2024 - Present",
    description:
      "As a Campus Ambassador for Mahindra University, I provided prospective students with information about the university, programs, and events through online communication, addressing their queries and guiding them through the admission process.",
    responsibilities: [
      "Responded to inquiries from prospective students, providing detailed information about the university, programs, and campus life.",
      "Acted as a point of contact for students, answering their questions and addressing concerns via online platforms.",
      "Informed new students about admission processes, deadlines, and key events happening at the university.",
      "Ensured a seamless flow of communication, offering clear and accurate details to help prospective students make informed decisions.",
      "Provided feedback on product features and usability"
    ]
  };

  const events = [
    {
      title: "Tech-a-thon by EY",
      role: "Participant",
      date: "Dec 2024",
      description: "Participated in a team-based competition and co-created 'Dhanamitra', a web application promoting financial literacy among illiterate individuals using regional languages."
    },
    {
      title: "Flipkart Runway: Season 4",
      role: "Quiz Round Participant",
      date: "March 2024",
      description: "I participated in Flipkart Runway: Season 4's national-level online quiz, focused on business and analytics roles. It helped me explore industry problem statements and gain insights into Flipkart's campus engagement.",
      achievement: "certificate of participation from Flipkart"
    },
    {
        title: "Sponsorship Team Member -Ather/Airo",
        role: "Sponsorship Team Member",
        date: "2023",
        description: "Assisted in securing sponsors for university events, including negotiating sponsorships, maintaining relationships with sponsors, and ensuring they received the expected benefits.",
        
    },
    {
        title: "Unstop's Got Latent",
        role: "Participant",
        date: "Nov 2024",
        description: "Actively contributed to solving real-world, skill-based challenges by applying analytical thinking, problem-solving, and creativity to develop practical solutions during a national-level competition.",
        achievement: "Awarded Certificate of Participation by Unstop"
      
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Extra-Curricular Activities"
            subtitle="Leadership roles, events, and initiatives beyond the classroom."
          />

          {/* Campus Ambassador Role */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
            <div className="border-b border-gray-300 bg-navy text-white p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">{ambassadorRole.title}</h3>
                  <p className="text-white">{ambassadorRole.organization}</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{ambassadorRole.period}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-700 mb-6">{ambassadorRole.description}</p>

              <div>
                <h4 className="font-semibold text-navy mb-3 flex items-center">
                  <Users size={18} className="mr-2 text-gold" />
                  Key Responsibilities
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {ambassadorRole.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Events Participated */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Events & Initiatives</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="card p-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold text-navy">{event.title}</h4>
                    <span className="bg-gray-100 text-navy text-sm px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>

                  <p className="text-gold font-medium mt-1 mb-3">{event.role}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="mt-auto">
                    <div className="flex items-center text-navy">
                      <Award size={16} className="mr-2 text-gold" />
                      <span className="font-medium">{event.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Extra-curricular activities have been integral to my personal and professional development, 
              allowing me to apply classroom knowledge in real-world settings while building valuable soft skills 
              and connections.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ActivitiesPage;
