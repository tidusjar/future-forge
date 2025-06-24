import React from 'react';
import { Users } from 'lucide-react';

interface TeamCardProps {
  teamNumber: number;
  members: string[];
}

const TeamCard = ({ teamNumber, members }: TeamCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow hover:shadow-lg hover:bg-secondary/10 transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-secondary p-2 rounded-lg">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-primary">Team {teamNumber}</h3>
      </div>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-background rounded-lg px-3 py-2 text-primary/80 hover:text-primary transition-colors"
          >
            {member}
          </div>
        ))}
      </div>
      <div className="mt-4 text-sm text-primary/60">
        {members.length} members
      </div>
    </div>
  );
};

export default TeamCard;
