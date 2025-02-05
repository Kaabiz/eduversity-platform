import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 15430,
    price: 89.99,
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Digital Marketing Masterclass",
    instructor: "Michael Chen",
    rating: 4.7,
    students: 12250,
    price: 79.99,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Data Science Fundamentals",
    instructor: "Alex Thompson",
    rating: 4.9,
    students: 18760,
    price: 94.99,
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular courses and start your learning journey today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;