export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400">
          Copyright &copy; {new Date().getFullYear()} East Coast Anglers Club
        </p>

        {/* Developer brand credit — Chan Meng */}
        <div className="mt-6 flex flex-col items-center gap-2 border-t border-white/10 pt-6">
          <a
            href="https://github.com/ChanMeng666"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white"
          >
            <img src="/brand/chan-meng-monkey.svg" alt="Chan Meng" className="h-5 w-5" />
            <span className="font-medium">Built by Chan Meng — need a custom app like this one?</span>
          </a>
          <a
            href="mailto:chanmeng.dev@gmail.com"
            className="text-xs text-slate-400 transition-colors hover:text-white"
          >
            chanmeng.dev@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
