function Filter({ filterData, activeCategory, setActiveCategory }) {
  return (
    <div className="w-11/12 max-w-5xl mx-auto py-6 flex flex-wrap justify-center gap-3">
      {filterData.map((item) => (
        <button
          key={item.id}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            activeCategory === item.title
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
          onClick={() => setActiveCategory(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}
export default Filter;