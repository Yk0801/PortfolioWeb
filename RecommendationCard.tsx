import { Quote } from 'lucide-react';

interface RecommendationCardProps {
  content: string;
  author: string;
  role: string;
  company?: string;
  pdfUrl?: string;
}

const RecommendationCard = ({
  content,
  author,
  role,
  company,
  pdfUrl
}: RecommendationCardProps) => {
  return (
    <div className="card p-8 relative">
      <Quote className="text-gold opacity-20 absolute top-4 left-4" size={40} />
      
      <div className="relative z-10">
        <p className="text-gray-700 mb-6 italic">"{content}"</p>
        
        <div>
          <h4 className="font-semibold text-navy">{author}</h4>
          <p className="text-gray-600 text-sm">
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
        
        {pdfUrl && (
          <div className="mt-4">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy hover:text-gold transition-colors text-sm inline-flex items-center"
            >
              View Full Recommendation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationCard;
