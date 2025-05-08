import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import RecommendationCard from '@/components/ui/RecommendationCard';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const RecommendationsPage = () => {
  const recommendations = [
    {
      content:
        "I had the pleasure of mentoring Yuktha during her internship, and I was consistently impressed by her dedication, curiosity, and ability to quickly grasp complex concepts. Coming from a BBA background with a strong technical foundation, she stood out for her unique blend of business acumen and analytical skills.",
      author: "Babasaheb R Mane",
      role: "Data Scientist",
      company: "Prolifics.",
      pdfUrl: "https://www.linkedin.com/in/yuktha-sri-bollina/details/recommendations/",
    },
    {
      content:
        "I am delighted to write this recommendation for Yuktha Sri Bollina, a standout student in my Introduction to Statistics, Linear Algebra, and Computational Statistics courses. Yuktha consistently impressed me with her analytical mindset and dedication. In Introduction to Statistics, she demonstrated a knack for interpreting data and applying her statistical knowledge to solve complex statistical problems.",
      author: "Pranjal Chandrakar",
      role: "Assistant Professor",
      company: "Mahindra University - School Of Management",
      pdfUrl: "https://www.linkedin.com/in/yuktha-sri-bollina/details/recommendations/",
    },
  ];

  return (
    <PageLayout>
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          {/* Animated Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              title="Recommendations"
              subtitle="Professional endorsements from mentors, professors, and supervisors."
            />
          </motion.div>

          {/* Animated Recommendation Cards */}
          <motion.div
            className="grid grid-cols-1 gap-8 max-w-4xl mx-auto mb-16"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {recommendations.map((recommendation, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <RecommendationCard {...recommendation} />
              </motion.div>
            ))}
          </motion.div>

          {/* Animated CTA Box */}
          <motion.div
            className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start">
              <div className="mr-4 mt-1 text-gold">
                <FileText size={24} />
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  Request a Recommendation
                </h3>
                <p className="text-gray-700 mb-4">
                  If you've worked with me and would like to provide a
                  recommendation, I would greatly appreciate your insights and
                  feedback. Please feel free to reach out via email or LinkedIn.
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
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RecommendationsPage;
