import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/70 dark:bg-neutral-900/70 rounded-2xl border border-white/20 dark:border-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="font-semibold text-neutral-900 dark:text-white text-lg tracking-tight">
              <span className="inline-block bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Naman Sinha</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
              <div className="flex items-center gap-3">
                <a href="https://github.com/get2naman-bit?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/naman-sinha-986511248/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" aria-label="Email" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/20 dark:border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-neutral-700 dark:text-neutral-300 py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="https://github.com/get2naman-bit?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/naman-sinha-986511248/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#contact" aria-label="Email" className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
