import Spline from '@splinetool/react-spline';
import { ArrowRight, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white dark:from-neutral-950/60 dark:via-neutral-950/40 dark:to-neutral-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 dark:bg-neutral-900/60 backdrop-blur px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              UI/UX Designer & Frontend Developer
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900 dark:text-white">
              Hi, I’m <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Naman Sinha</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
              I’m an aspiring Frontend and Android app developer who enjoys turning ideas into sleek, interactive digital experiences. Curious by nature, I’m always exploring new tools and technologies to push creativity and code further.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-medium shadow hover:shadow-md transition-shadow">
                View projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-white/90 dark:hover:bg-neutral-900">
                Get in touch
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 px-4 py-2.5 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                <FileDown size={16} />
                Download résumé
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
              <span>React</span>
              <span>•</span>
              <span>UI/UX</span>
              <span>•</span>
              <span>React Native</span>
              <span>•</span>
              <span>Flutter</span>
            </div>
          </div>
          <div className="lg:col-span-6 xl:col-span-5" />
        </div>
      </div>
    </section>
  );
}
