export default function Skills() {
  const stacks = [
    {
      label: 'Frontend',
      items: [
        { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind', src: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIVE1MNXxlbnwwfDB8fHwxNzYyMzQ3MzAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
      ],
    },
    {
      label: 'Mobile',
      items: [
        { name: 'React Native', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Flutter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      ],
    },
    {
      label: 'Design & Tools',
      items: [
        { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/0 via-sky-500/5 to-cyan-400/0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Technical skills</h2>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            A creative toolkit I use to design and build smooth, interactive experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stacks.map((stack) => (
            <div key={stack.label} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">{stack.label}</span>
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-4">
                {stack.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 rounded-xl border border-neutral-200/70 dark:border-neutral-800/80 bg-white/70 dark:bg-neutral-900/70 p-3 hover:shadow transition-shadow">
                    <img src={item.src} alt={item.name} className="h-6 w-6" />
                    <span className="text-sm text-neutral-800 dark:text-neutral-200">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
