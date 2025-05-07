import React from 'react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  badgeUrl: string;
  verificationUrl: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  description,
  badgeUrl,
  verificationUrl,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col md:flex-row items-start gap-6">
      <img
        src={badgeUrl}
        alt={`${title} Certificate`}
        className="w-full md:w-96 max-h-[400px] object-contain border rounded"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-navy mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-1">{issuer} · {date}</p>
        <p className="text-gray-700 mb-3">{description}</p>
        <a
          href={verificationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline"
        >
          Verify Certificate ↗
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
