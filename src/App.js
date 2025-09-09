import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCourses(data.data);
        console.log(data);
      } catch (error) {
        toast.error("somthing went wrong");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <div className="bg-slate-800">
        <Filter 
          filterData={filterData} 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        ></Filter>
        <div>{loading ? <Spinner /> : <Cards courses={courses} activeCategory={activeCategory} />}</div>
      </div>
      <footer className="py-6 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Course Catalog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;