import React from 'react';
import { CheckCircle } from 'lucide-react';

interface RequirementCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const RequirementCard = ({ title, description, icon }: RequirementCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow hover:shadow-lg hover:bg-secondary/10 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-secondary p-2 rounded-lg shrink-0">
          {icon || <CheckCircle className="w-5 h-5 text-secondary-foreground" />}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
          <p className="text-primary/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RequirementCard;
