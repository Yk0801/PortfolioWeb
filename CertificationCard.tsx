
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  badgeUrl?: string;
  verificationUrl?: string;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  description,
  badgeUrl,
  verificationUrl
}: CertificationCardProps) => {
  return (
    <div className="card overflow-hidden flex flex-col md:flex-row">
      {badgeUrl && (
        <div className="md:w-1/3 p-6 flex items-center justify-center bg-gray-50">
          <img 
            src={badgeUrl} 
            alt={`${title} badge`} 
            className="max-w-[120px] max-h-[120px]"
          />
        </div>
      )}
      
      <div className={`p-6 ${badgeUrl ? 'md:w-2/3' : 'w-full'}`}>
        <h3 className="text-xl font-bold text-navy mb-1">{title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <Award size={16} className="mr-2" />
          <span>{issuer} · {date}</span>
        </div>
        
        {description && (
          <p className="text-gray-700 mb-4">{description}</p>
        )}
        
        {verificationUrl && (
          <a 
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-navy hover:text-gold transition-colors"
          >
            <span className="mr-2">Verify Certificate</span>
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;
