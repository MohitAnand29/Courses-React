import Card from "./Card";

function Cards({ courses, activeCategory }) {
  const getCourses = () => {
    if (activeCategory === "All") {
      // Return all courses from all categories
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      // Return courses only from the active category
      return courses[activeCategory] || [];
    }
  };

  const filteredCourses = getCourses();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-white mb-6">
        {activeCategory} Courses ({filteredCourses.length})
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <Card key={course.id || index} course={course} />
          ))
        ) : (
          <div className="text-white text-center py-8">
            No courses found in this category.
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;