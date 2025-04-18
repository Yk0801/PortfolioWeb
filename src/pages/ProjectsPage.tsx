import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const ProjectsPage = () => {
  // Sample project data
  const otherProjects = [
    {
      title: "Market Research for Tavasya",
      description: "Comprehensive market research project analyzing feasibility, demand, competition, and consumer behavior for a hybrid dine-in and cloud kitchen restaurant in Hyderabad.",
      techStack: ["Market Research", "Consumer Surveys", "Competitive Analysis", "Field Research", "Qualitative & Quantitative Methods"],
      imageUrl: "/assets/Tavasya.jpg",
      githubUrl: "https://github.com/Yk0801/Tavasya_Market_Research/tree/main",
      liveUrl: "https://github.com/Yk0801/Tavasya_Market_Research/tree/main"
    },
    {
      title: "Netflix User Behavior Analysis",
      description: "Exploratory and predictive analysis of Netflix user data to understand viewing patterns and binge behavior.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      imageUrl: "/assets/netflix_pic.png",
      githubUrl: "https://github.com/Yk0801/Predictive-Data-Analysis-Visualization",
      liveUrl: "https://github.com/Yk0801/Predictive-Data-Analysis-Visualization/blob/main/Predictive%20Data%20Analysis%20%26%20Visualization.ipynb"
    },
    {
      title: "E-Commerce Customer Insights & Prediction",
      description: "Conducted comprehensive analysis on 11,655 e-commerce transactions using regression, decision trees, random forests, and K-Means clustering to predict customer spending and segment users based on behavior and demographics.",
      techStack: ["Python", "Pandas", "Linear Regression", "Decision Tree", "Random Forest", "K-Means Clustering", "Seaborn", "Matplotlib"],
      imageUrl: "/assets/excel.png",
      githubUrl: "https://github.com/Yk0801/marketing_analytics_project/tree/main"
    },
    {
      title: "Cereal Nutritional Data Analysis",
      description: "Exploratory data analysis and interactive Power BI dashboard built using a dataset of 77 cereals across 7 manufacturers. Visualized key nutritional metrics such as calories, sugar, protein, and fiber to uncover health patterns and brand-wise comparisons. Enabled dynamic filtering for informed cereal choices based on dietary preferences.",
      techStack: ["Power BI", "Python", "Pandas", "Data Visualization", "EDA"],
      imageUrl: "/assets/POWER_BI.png",
      githubUrl: "https://github.com/Yk0801/Cereal-Analysis",
      liveUrl: "#" // Optional: link to Power BI report if published
    },
    {
      title: "Pet Paradise",
      description: "A premium pet service start-up providing mobile grooming, pet food, accessories, and companionship matchmaking for pets. Focused on creating a paradise for your furry friends with convenience and care.",
      techStack: ["Local SEO", "Social Media Marketing", "Content Marketing", "Google Ads", "Influencer Marketing"],
      imageUrl: "/assets/pet_paradise.png",
      githubUrl: "#"
    },
    {
      title: "IoT-enabled eDNA Sampling in Wildlife and Forestry",
      description: "An innovative ecological monitoring solution using IoT-enabled environmental DNA (eDNA) samplers to track biodiversity and species health in real time. This project leverages advanced sensor integration and DNA sequencing technology to deliver early insights into environmental threats and species decline, enabling proactive conservation decisions.",
      techStack: ["IoT", "Environmental DNA (eDNA)", "Sensor Technology", "Biodiversity Monitoring", "Conservation Science"],
      imageUrl: "/assets/iot.png",
      githubUrl: "#"
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

          {/* Other Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-navy">Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
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
