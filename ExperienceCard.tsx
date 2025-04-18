
import { CalendarIcon, Building2 } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  responsibilities,
  skills
}: ExperienceCardProps) => {
  return (
    <div className="card p-6 mb-6 border-l-4 border-l-gold animate-fade-in">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-navy">{title}</h3>
          <div className="flex items-center text-gray-600 mt-1">
            <Building2 size={16} className="mr-2" />
            <span>{company}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mt-2 md:mt-0">
          <CalendarIcon size={16} className="mr-2" />
          <span>{duration}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-navy mb-2">Key Responsibilities:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-700">{responsibility}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-gray-100 text-navy px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
