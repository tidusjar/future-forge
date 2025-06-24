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
    <div className="min-h-screen flex flex-col bg-primary">
      {/* Header */}
      <header className="w-full bg-primary text-primary-foreground shadow-md py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/exclaimer-logo.png" alt="Exclaimer Logo" className="w-10 h-10 object-contain mr-2" />
          <span className="text-2xl font-bold tracking-tight">Exclaimer Hackathon</span>
        </div>
        <nav className="space-x-6">
          <a href="#teams" className="hover:underline text-secondary font-semibold">Teams</a>
          <a href="#requirements" className="hover:underline text-secondary font-semibold">Requirements</a>
          <a href="#timeline" className="hover:underline text-secondary font-semibold">Timeline</a>
          <a href="#evaluation" className="hover:underline text-secondary font-semibold">Evaluation</a>
        </nav>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary/30 py-20">
          <div className="relative container mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2 mb-6">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-primary-foreground">July 7-11, 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-foreground mb-6">
                Exclaimer Hackathon
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
                5 days of innovation, creativity, and cutting-edge Angular development. 
                Build the future of Exclaimer with your team.
              </p>
              <CountdownTimer />
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <div className="bg-card rounded-lg px-6 py-3 shadow">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-primary/70 text-sm">Teams</div>
                </div>
                <div className="bg-card rounded-lg px-6 py-3 shadow">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-primary/70 text-sm">Days</div>
                </div>
                <div className="bg-card rounded-lg px-6 py-3 shadow">
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-primary/70 text-sm">Winner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Teams Section */}
        <section id="teams" className="py-20 px-6 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Meet the Teams</h2>
              <p className="text-primary/70 text-lg">Cross-functional collaboration bringing diverse perspectives</p>
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
        <section id="requirements" className="py-20 px-6 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Requirements & Constraints</h2>
              <p className="text-primary/70 text-lg">Essential guidelines for all participating teams</p>
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
        <section id="timeline" className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Event Timeline</h2>
              <p className="text-primary/70 text-lg">Key milestones and preparation steps</p>
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
        <section id="evaluation" className="py-20 px-6 bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Evaluation Criteria</h2>
              <p className="text-primary/70 text-lg">How projects will be judged</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {evaluationCriteria.map((criteria, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-4 hover:bg-secondary/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-2 rounded-lg">
                      <Presentation className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-primary/80 text-sm">{criteria}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-primary text-primary-foreground py-6 mt-12 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-6 h-6 rounded-full bg-secondary"></span>
            <span className="font-semibold">Exclaimer Hackathon</span>
          </div>
          <div className="text-sm text-primary-foreground/70">&copy; {new Date().getFullYear()} Exclaimer Ltd. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
