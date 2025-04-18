import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ExperienceCard from '@/components/ui/ExperienceCard';

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Prolifics Corporation Private Limited",
      duration: "June 2024 - August 2024",
      description:
        "I completed an 8-week internship at Prolifics Corporation Limited as a Data Analyst Intern, where I received training in Python, SQL, and Power BI. I applied these skills to practical data problems and later conducted a detailed business analysis of an internal product, GPT Foundry. This experience enhanced both my technical proficiency and analytical thinking, while also strengthening my communication and problem-solving skills.",
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
    }
  ];

  return (
    <PageLayout>
      <section className="py-10 bg-white">
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

      <section className="pt-8 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Skills & Tools"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
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
