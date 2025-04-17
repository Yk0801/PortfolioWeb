import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ExperienceCard from '@/components/ui/ExperienceCard';

const ExperiencePage = () => {
  // Sample experience data
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Prolifics Corporation Private Limited",
      duration: "June 2024 - August 2024",
      description: "I completed an 8-week internship at Prolifics Corporation Limited as a Data Analyst Intern, where I received training in Python, SQL, and Power BI. I applied these skills to practical data problems and later conducted a detailed business analysis of an internal product, GPT Foundry. This experience enhanced both my technical proficiency and analytical thinking, while also strengthening my communication and problem-solving skills.",
      responsibilities: [
        "Underwent structured training in Python, SQL, and Power BI to build foundational technical skills.",
        "Practiced data cleaning, manipulation, and visualization using real-world datasets.",
        "Executed SQL queries and integrated SQL with Python for efficient data handling.",
        "Conducted an in-depth business analysis of Prolifics' internal product, GPT Foundry, focusing on market research, competitor analysis, and identifying key performance indicators.",
        "Created a comprehensive business analysis report to present actionable insights.",
        "Collaborated with team members to review progress and ensure alignment with project goals.",
        "Developed problem-solving, time management, and communication skills through daily tasks and deliverables."
      ],
      skills: ["Python", "SQL", "Power BI", "Business Analysis", "Tools & Platforms"]
    },
    // {
    //   title: "Research Assistant",
    //   company: "University Economics Department",
    //   duration: "January 2023 - May 2023",
    //   description: "Assisted faculty with economic research projects and data collection.",
    //   responsibilities: [
    //     "Collected and cleaned datasets for research projects",
    //     "Performed statistical analysis using R and Excel",
    //     "Prepared literature reviews on economic theories",
    //     "Helped create visualizations for research publications"
    //   ],
    //   skills: ["R", "Excel", "Research Methods", "Statistical Analysis", "Economic Modeling"]
    // },
    {
      title: "Campus Ambassador",
      company: "Mahindra University",
      duration: "January 2024 - Present",
      description: "As a Campus Ambassador for Mahindra University, I provided prospective students with information about the university, programs, and events through online communication, addressing their queries and guiding them through the admission process.",
      responsibilities: [
        "Responded to inquiries from prospective students, providing detailed information about the university, programs, and campus life.",
        "Acted as a point of contact for students, answering their questions and addressing concerns via online platforms.",
        "Informed new students about admission processes, deadlines, and key events happening at the university.",
        "Ensured a seamless flow of communication, offering clear and accurate details to help prospective students make informed decisions.",
        "Provided feedback on product features and usability"
      ],
      skills: ["Communication", "Student Engagement", "Information Dissemination", "Peer-to-Peer Support", "Brand Advocacy"]
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Work Experience"
            subtitle="My professional journey and internship experiences that have shaped my career path."
          />
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Skills & Tools"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-navy">Technical Skills</h3>
              <ul className="space-y-2">
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Data Analysis & Visualization</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Python Programming</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">SQL & Databases</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Excel & Spreadsheets</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">DAX</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Data Interpretation & Reporting</li>
              </ul>
            </div>
            
            {/* Software Tools */}
            <div className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-navy">Software & Tools</h3>
              <ul className="space-y-2">
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">SQL Server</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Power BI</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Python Libraries</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Microsoft Excel</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Jupyter Notebooks</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Git & Version Control</li>
              </ul>
            </div>
            
            {/* Soft Skills */}
            <div className="card p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4 text-navy">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Communication</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Problem Solving</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Teamwork</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Project Management</li>
                <li className="px-3 py-2 hover:bg-gold/10 rounded-md transition-colors">Student Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExperiencePage;
