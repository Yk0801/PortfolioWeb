
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar, Users, Award, Megaphone } from 'lucide-react';

const ActivitiesPage = () => {
  // Sample activities data
  const ambassadorRole = {
    title: "Campus Ambassador",
    organization: "Educational Technology Company",
    period: "September 2022 - Present",
    description: "Served as an official representative of the company on campus, promoting their educational platform and organizing events to increase awareness.",
    responsibilities: [
      "Organized workshops and demo sessions for students",
      "Created and distributed marketing materials",
      "Provided product feedback from student perspective",
      "Built relationships with student clubs and faculty"
    ],
    achievements: [
      "Increased sign-ups by 30% during promotional campaign",
      "Organized 5 successful workshops with over 200 total attendees",
      "Received 'Outstanding Ambassador' recognition"
    ]
  };
  
  const events = [
    {
      title: "Data Science Hackathon",
      role: "Participant",
      date: "November 2023",
      description: "Collaborated in a team of four to develop a machine learning solution for predicting customer churn.",
      achievement: "Secured 2nd place among 20 teams"
    },
    {
      title: "Economic Forum Conference",
      role: "Student Volunteer",
      date: "October 2023",
      description: "Assisted in organizing and coordinating logistics for a major economic conference hosted by the university.",
      achievement: "Received recognition for exceptional service"
    },
    {
      title: "Analytics Club Workshop Series",
      role: "Workshop Leader",
      date: "March-April 2023",
      description: "Led a series of three workshops teaching fellow students the basics of data visualization and analysis.",
      achievement: "Consistently positive feedback from participants"
    },
    {
      title: "Community Service Initiative",
      role: "Team Leader",
      date: "January 2023",
      description: "Led a student group in developing a data-driven solution for a local non-profit organization.",
      achievement: "Solution implemented by the organization"
    }
  ];
  
  const clubs = [
    {
      name: "Data Science Club",
      role: "Active Member",
      period: "2022 - Present",
      activities: "Participate in workshops, collaborate on projects, attend speaker events"
    },
    {
      name: "Economics Society",
      role: "Events Coordinator",
      period: "2023 - Present",
      activities: "Organize guest lectures, coordinate networking events, facilitate discussions"
    },
    {
      name: "Student Leadership Council",
      role: "Member",
      period: "2022 - 2023",
      activities: "Represented department interests, participated in campus policy discussions"
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
            <div className="border-b border-gray-100 bg-navy text-white p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-2xl font-bold">{ambassadorRole.title}</h3>
                  <p className="text-gold">{ambassadorRole.organization}</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{ambassadorRole.period}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 mb-6">{ambassadorRole.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                
                <div>
                  <h4 className="font-semibold text-navy mb-3 flex items-center">
                    <Award size={18} className="mr-2 text-gold" />
                    Key Achievements
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {ambassadorRole.achievements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-navy mb-3 flex items-center">
                  <Megaphone size={18} className="mr-2 text-gold" />
                  Impact & Growth
                </h4>
                <p className="text-gray-700">
                  This role has significantly enhanced my leadership, communication, and marketing skills. It has provided me with valuable experience in conveying complex technical concepts to diverse audiences and understanding user needs from multiple perspectives. Building relationships across campus has also expanded my professional network and opened doors to collaborative opportunities.
                </p>
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
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Clubs & Organizations"
            subtitle="Student groups and organizations I'm actively involved with."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {clubs.map((club, index) => (
                <div 
                  key={index} 
                  className={`p-6 ${index < clubs.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-xl font-semibold text-navy">{club.name}</h4>
                    <span className="text-gray-600 text-sm mt-1 md:mt-0">{club.period}</span>
                  </div>
                  
                  <p className="text-gold font-medium mb-2">{club.role}</p>
                  <p className="text-gray-700">{club.activities}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Extra-curricular activities have been integral to my personal and professional development, 
                allowing me to apply classroom knowledge in real-world settings while building valuable soft skills 
                and connections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ActivitiesPage;
