
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = false 
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`section-title ${centered ? 'mx-auto after:left-0 after:right-0 after:mx-auto' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
