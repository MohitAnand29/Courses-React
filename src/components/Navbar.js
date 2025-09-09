function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-5 shadow-lg border-b border-slate-700">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center gradient-text animate-glow">
          Top Courses
        </h1>
        <p className="text-slate-300 text-center mt-2">
          Discover the best learning resources curated for you
        </p>
      </div>
    </nav>
  );
}
export default Navbar;