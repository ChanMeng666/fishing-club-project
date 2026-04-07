export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400">
          Copyright &copy; {new Date().getFullYear()} East Coast Anglers Club
        </p>
      </div>
    </footer>
  );
}
