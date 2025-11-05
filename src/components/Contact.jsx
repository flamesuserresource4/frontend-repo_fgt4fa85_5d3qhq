import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  const email = 'get2naman@gmail.com';
  const phone = '+91 8925474810';

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200/70 dark:border-neutral-800/80 bg-gradient-to-b from-white/70 to-white/40 dark:from-neutral-900/70 dark:to-neutral-900/40 backdrop-blur p-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Let’s build something great</h2>
            <p className="mt-3 text-neutral-700 dark:text-neutral-300">
              I’m available for freelance, internships, and collaborative projects. Reach out—happy to chat about ideas, UI/UX, or front-end builds.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium shadow hover:shadow-md transition-shadow"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href="https://github.com/get2naman-bit?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/naman-sinha-986511248/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            >
              <Phone size={16} /> {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
