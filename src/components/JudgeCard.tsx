
import React from 'react';
import { Star } from 'lucide-react';

interface JudgeCardProps {
  name: string;
  role?: string;
}

const JudgeCard = ({ name, role }: JudgeCardProps) => {
  return (
    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
      <div className="bg-yellow-500/20 p-2 rounded-full w-fit mx-auto mb-3">
        <Star className="w-5 h-5 text-yellow-400" />
      </div>
      <h3 className="text-white font-semibold">{name}</h3>
      {role && <p className="text-gray-400 text-sm mt-1">{role}</p>}
    </div>
  );
};

export default JudgeCard;
