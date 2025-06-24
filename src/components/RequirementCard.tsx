
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface RequirementCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const RequirementCard = ({ title, description, icon }: RequirementCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-green-500/20 p-2 rounded-lg shrink-0">
          {icon || <CheckCircle className="w-5 h-5 text-green-400" />}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RequirementCard;
