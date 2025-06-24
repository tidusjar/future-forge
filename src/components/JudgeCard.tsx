import React from 'react';
import { Star } from 'lucide-react';

interface JudgeCardProps {
  name: string;
  role?: string;
}

const JudgeCard = ({ name, role }: JudgeCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-4 text-center shadow hover:shadow-lg hover:bg-secondary/10 transition-transform duration-300">
      <div className="bg-secondary p-2 rounded-full w-fit mx-auto mb-3">
        <Star className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-primary font-semibold">{name}</h3>
      {role && <p className="text-primary/70 text-sm mt-1">{role}</p>}
    </div>
  );
};

export default JudgeCard;
