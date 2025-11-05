import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Mindmate',
    description:
      'A mental health assistant and counselling platform with an AI chatbot, resource hub, and community groups for support.',
    tags: ['HTML', 'CSS', 'React', 'JavaScript'],
    live: 'https://hpsc.tiiny.site',
    repo: '#',
  },
  {
    title: 'AI Credit Score Manager',
    description:
      'Computes creditworthiness using day-to-day bills (electricity, phone, etc.) and provides an AI-approved score based on inputs.',
    tags: ['HTML', 'CSS', 'React', 'JavaScript'],
    live: 'https://creditscore-main.onrender.com',
    repo: '#',
  },
  {
    title: 'TicketSmart — Bus/Train Booking',
    description:
      'Smart seat management for booking and downloading tickets with a mock payment flow across routes.',
    tags: ['HTML', 'CSS', 'React', 'JavaScript'],
    live: 'https://ticket-smart-seat.lovable.app',
    repo: '#',
  },
  {
    title: 'TruthLensAI',
    description:
      'A news credibility checker that analyzes claims and surfaces sources to help detect misinformation online.',
    tags: ['HTML', 'CSS', 'React', 'JavaScript'],
    live: 'https://truth-guard-ai-08a116dd.base44.app/',
    repo: '#',
  },
  {
    title: 'Juswipe (Upcoming)',
    description:
      'A swipe-based news app that learns preferences from left/right swipes and covers 10+ countries and languages.',
    tags: ['React Native', 'Flutter'],
    live: '#',
    repo: '#',
  },
];

function ProjectCard({ title, description, tags, live, repo }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/60 backdrop-blur shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-sky-500/0 to-cyan-400/0 group-hover:from-indigo-500/5 group-hover:via-sky-500/5 group-hover:to-cyan-400/5 transition-colors" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-full border border-neutral-300 dark:border-neutral-700 px-2.5 py-1 text-xs text-neutral-700 dark:text-neutral-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3">
          {live !== '#' && (
            <a href={live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 dark:text-white hover:underline">
              <ExternalLink size={16} /> Live demo
            </a>
          )}
          {repo !== '#' && (
            <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:underline">
              <Github size={16} /> Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const experience = [
  {
    role: 'UI/UX Designer & Frontend Developer',
    org: 'Youth India Foundation',
    period: 'May 2025 — July 2025',
    detail:
      'Contributed to website redesigns and front-end feature development, improving usability and visual polish.',
  },
];

const achievements = [
  'Cleared SIH 2025 internal round — Top 30 of 220 teams as Frontend Lead on a mental health counselling platform; idea submitted to the national portal.',
  'Participated in Riidl Incuverse 2025 Hackathon building a personal finance app for savings insights.',
  'Participated in Google Gen AI Hackathon, enhancing an AI-powered counselling experience.',
  'Submitted idea to VW MOBILOTHON 5.0: a real-time parking finder app; led the team (results pending).',
  'Set to participate in the Grand Finale of Mumbai Hacks 2025, leading an agentic AI to counter misinformation.',
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Selected projects</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            A snapshot of work that blends thoughtful UX with performance and clear, maintainable code.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Experience</h3>
            <ul className="mt-4 space-y-4">
              {experience.map((e) => (
                <li key={e.org} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">{e.period}</p>
                  <p className="mt-1 font-medium text-neutral-900 dark:text-white">{e.role} • {e.org}</p>
                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">Hackathons & Achievements</h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((a, idx) => (
                <li key={idx} className="rounded-xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4 text-sm text-neutral-700 dark:text-neutral-300">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
