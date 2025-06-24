import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface TimelineEventProps {
  title: string;
  description: string;
  date?: string;
  time?: string;
  isHighlight?: boolean;
}

const TimelineEvent = ({ title, description, date, time, isHighlight }: TimelineEventProps) => {
  return (
    <div className={`relative pl-8 pb-8 ${isHighlight ? 'bg-secondary/20 rounded-xl p-4 -ml-4 shadow' : ''}`}>
      <div className={`absolute left-0 top-2 w-3 h-3 rounded-full ${isHighlight ? 'bg-secondary' : 'bg-primary/60'}`} />
      <div className="absolute left-1.5 top-5 w-0.5 h-full bg-border" />
      
      <div className="flex items-start gap-4">
        <div>
          <h3 className={`text-lg font-semibold ${isHighlight ? 'text-primary' : 'text-primary/80'} mb-1`}>
            {title}
          </h3>
          <p className="text-primary/60 text-sm mb-2">{description}</p>
          
          <div className="flex gap-4 text-xs text-primary/50">
            {date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{date}</span>
              </div>
            )}
            {time && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{time}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
