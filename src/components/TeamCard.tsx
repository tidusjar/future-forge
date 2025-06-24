
import React from 'react';
import { Users } from 'lucide-react';

interface TeamCardProps {
  teamNumber: number;
  members: string[];
}

const TeamCard = ({ teamNumber, members }: TeamCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
          <Users className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">Team {teamNumber}</h3>
      </div>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-lg px-3 py-2 text-gray-300 hover:text-white transition-colors"
          >
            {member}
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-400">
        {members.length} members
      </div>
    </div>
  );
};

export default TeamCard;
