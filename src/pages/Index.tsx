
import React from 'react';
import { Calendar, Trophy, Users, Target, Presentation, Code, GitBranch, Clock } from 'lucide-react';
import CountdownTimer from '../components/CountdownTimer';
import TeamCard from '../components/TeamCard';
import RequirementCard from '../components/RequirementCard';
import JudgeCard from '../components/JudgeCard';
import TimelineEvent from '../components/TimelineEvent';

const Index = () => {
  const teams = [
    { teamNumber: 1, members: ['Joseph', 'James C', 'Jeff', 'Lucy'] },
    { teamNumber: 2, members: ['Gabriel', 'Tim', 'Brad', 'Thomas'] },
    { teamNumber: 3, members: ['Umut', 'Simon', 'Dimi', 'Kyle'] },
    { teamNumber: 4, members: ['Vickie', 'James S', 'Alex', 'Reece', 'Laura'] }
  ];

  const judges = [
    { name: 'Jamie Rees' },
    { name: 'Phillip Vetter' },
    { name: 'Dominic Light' },
    { name: 'Scott Rulton' },
    { name: 'Bruno Martins' }
  ];

  const requirements = [
    {
      title: 'Exclaimer Related',
      description: 'Your project must be related to Exclaimer products, services, or potential customer features.',
      icon: <Target className="w-5 h-5 text-blue-400" />
    },
    {
      title: 'Full Angular Application',
      description: 'Build a complete Angular application using the newest versions and features.',
      icon: <Code className="w-5 h-5 text-red-400" />
    },
    {
      title: 'No Backend Changes',
      description: 'Focus on frontend innovation without touching backend systems.',
      icon: <GitBranch className="w-5 h-5 text-green-400" />
    },
    {
      title: 'Reusable Components',
      description: 'Create components that can be reused across different parts of the application.',
      icon: <Users className="w-5 h-5 text-purple-400" />
    }
  ];

  const evaluationCriteria = [
    'Use of newest Angular versions/features',
    'Creativity - keeping customers at the forefront',
    'Presentation – Clear and compelling communication',
    'Demos/Showcasing of UI',
    'Shared contributions - even team participation',
    'Technical Correctness – Fully presentable UI',
    'Learning outcomes and insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300">July 7-11, 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Exclaimer Hackathon
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              5 days of innovation, creativity, and cutting-edge Angular development. 
              Build the future of Exclaimer with your team.
            </p>
            
            <CountdownTimer />
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-gray-300 text-sm">Teams</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-gray-300 text-sm">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-white">1</div>
                <div className="text-gray-300 text-sm">Winner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teams Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet the Teams</h2>
            <p className="text-gray-400 text-lg">Cross-functional collaboration bringing diverse perspectives</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((team) => (
              <TeamCard
                key={team.teamNumber}
                teamNumber={team.teamNumber}
                members={team.members}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Requirements & Constraints</h2>
            <p className="text-gray-400 text-lg">Essential guidelines for all participating teams</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {requirements.map((req, index) => (
              <RequirementCard
                key={index}
                title={req.title}
                description={req.description}
                icon={req.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Event Timeline</h2>
            <p className="text-gray-400 text-lg">Key milestones and preparation steps</p>
          </div>
          
          <div className="space-y-8">
            <TimelineEvent
              title="Preparation Phase"
              description="MFE creation, communications kickoff, and Slack channel setup"
              date="Before July 7th"
            />
            <TimelineEvent
              title="Hackathon Begins"
              description="Teams start development with idea confirmation by 10:30am"
              date="July 7th, 2025"
              time="9:00 AM"
              isHighlight={true}
            />
            <TimelineEvent
              title="Development Period"
              description="5 days of intensive development and collaboration"
              date="July 7-11, 2025"
            />
            <TimelineEvent
              title="Final Presentations"
              description="Live demos with 5-6 minutes presentation + 2-3 minutes Q&A"
              date="July 11th, 2025"
              isHighlight={true}
            />
            <TimelineEvent
              title="Winner Announcement"
              description="Jury panel selects and announces the winning team"
              date="July 11th, 2025"
            />
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Evaluation Criteria</h2>
            <p className="text-gray-400 text-lg">How projects will be judged</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {evaluationCriteria.map((criteria, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <Presentation className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-gray-300 text-sm">{criteria}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Jury Panel</h2>
            <p className="text-gray-400 text-lg">Expert judges evaluating your innovations</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {judges.map((judge, index) => (
              <JudgeCard key={index} name={judge.name} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-white font-semibold mb-2">Judge/Facilitator</h3>
              <p className="text-gray-400">Christopher Krishnan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
        <div className="container mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Prizes</h2>
            <p className="text-gray-400 text-lg">Recognition for exceptional innovation</p>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-12 max-w-lg mx-auto">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">1st Place Prize</h3>
            <p className="text-gray-300">Amazing prizes await the winning team!</p>
            <p className="text-sm text-gray-500 mt-4">Prizes coordinated by Linn Foster</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Exclaimer Hackathon 2025 • Built for Innovation • Hosted on GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
