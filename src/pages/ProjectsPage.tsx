import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const ProjectsPage = () => {
  // Sample project data
  const capstoneProject = {
    title: "Predictive Analytics for Retail Demand",
    description: "Capstone project analyzing retail data to predict demand patterns and optimize inventory management using machine learning algorithms.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Tableau"],
    imageUrl: "/placeholder.svg",
    grade: "A"
  };
  
  const otherProjects = [
    {
      title: "Economic Indicator Dashboard",
      description: "Interactive dashboard visualizing key economic indicators and their correlations over time.",
      techStack: ["R", "Shiny", "ggplot2", "Economic Data"],
      imageUrl: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Applied clustering algorithms to segment customers based on purchasing behavior and demographics.",
      techStack: ["Python", "K-Means", "Data Visualization", "Statistical Analysis"],
      imageUrl: "/placeholder.svg",
      githubUrl: "#"
    },
    {
      title: "Stock Market Trend Analysis",
      description: "Time-series analysis of stock market trends with predictive modeling for short-term price movements.",
      techStack: ["Python", "ARIMA", "Pandas", "Financial Analysis"],
      imageUrl: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Social Media Sentiment Analyzer",
      description: "Tool that analyzes sentiment from social media posts about specific products or brands.",
      techStack: ["Python", "NLTK", "NLP", "Sentiment Analysis"],
      imageUrl: "/placeholder.svg",
      githubUrl: "#"
    },
    {
      title: "E-commerce Purchase Prediction",
      description: "Predictive model to identify customers likely to make purchases based on browsing behavior.",
      techStack: ["Python", "Logistic Regression", "Data Mining", "Web Analytics"],
      imageUrl: "/placeholder.svg",
      githubUrl: "#"
    }
  ];
  
  const researchProjects = [
    {
      title: "Impact of Economic Policies on Market Volatility",
      description: "Research examining how economic policy announcements affect market volatility in different sectors.",
      techStack: ["R", "Statistical Analysis", "Economic Theory", "Financial Markets"],
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Consumer Behavior During Economic Downturns",
      description: "Analysis of changing consumer spending patterns during periods of economic contraction.",
      techStack: ["SPSS", "Survey Analysis", "Behavioral Economics", "Regression Analysis"],
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Projects & Research"
            subtitle="Explore my academic and professional projects showcasing my skills and interests."
          />
          
          {/* Capstone Project */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Capstone Project</h3>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <img 
                    src={capstoneProject.imageUrl} 
                    alt={capstoneProject.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <h3 className="text-2xl font-bold text-navy mb-2">{capstoneProject.title}</h3>
                    <div className="inline-flex items-center bg-gold bg-opacity-20 text-navy px-3 py-1 rounded-full text-sm font-semibold mb-3 md:mb-0">
                      Grade: {capstoneProject.grade}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{capstoneProject.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2">Project Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Developed predictive models with 85% accuracy for demand forecasting</li>
                      <li>Implemented data cleaning and transformation pipelines for large retail datasets</li>
                      <li>Created interactive visualizations to communicate findings to stakeholders</li>
                      <li>Recommended inventory optimizations resulting in potential 12% cost reduction</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {capstoneProject.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-navy px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Additional Projects</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
          
          {/* Research */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-navy">Research Work</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProjectsPage;
