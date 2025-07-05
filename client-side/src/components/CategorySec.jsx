import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiSearch, FiChevronRight } from 'react-icons/fi';


const CategorySec = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Fetch courses data
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // In a real app, this would be an API call
        const data = {
          categories: [
            "Development",
            "Business",
            "Data Science",
            "Marketing",
            "Life Styles",
            "Photography",
            "Art and Design",
            "Health and Fitness",
            "Music",
            "Finance",
            "Language",
            "Personal Development"
          ],
          courses: [
            // Development
            { id: 1, title: "Web Development Bootcamp", category: "Development", price: 299, instructor: "John Doe", rating: 4.8, students: 1250, duration: "40h", thumbnail: "https://via.placeholder.com/300x200?text=Web+Dev", inStock: true },
            { id: 2, title: "Mobile App Development", category: "Development", price: 249, instructor: "Jane Smith", rating: 4.6, students: 980, duration: "35h", thumbnail: "https://via.placeholder.com/300x200?text=Mobile+App", inStock: true },
            
            // Business
            { id: 3, title: "Business Management", category: "Business", price: 199, instructor: "Robert Johnson", rating: 4.5, students: 750, duration: "25h", thumbnail: "https://via.placeholder.com/300x200?text=Business", inStock: true },
            
            // Data Science
            { id: 4, title: "Data Analysis with Python", category: "Data Science", price: 349, instructor: "Emily Chen", rating: 4.9, students: 2100, duration: "45h", thumbnail: "https://via.placeholder.com/300x200?text=Data+Science", inStock: false },
            
            // ... more courses for each category
          ]
        };
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const addToCart = (course) => {
    setCart([...cart, course]);
    // Show toast notification
    alert(`${course.title} added to cart!`);
  };

  const filteredCourses = courses.courses?.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">Advisor & SquadXTech</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="input input-bordered pl-10 pr-4 py-2 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="indicator">
              <span className="indicator-item badge badge-primary">{cart.length}</span>
              <button className="btn btn-ghost">
                <FiShoppingCart className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </header>



      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Top Categories</h2>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setActiveCategory('All')}
              className={`btn ${activeCategory === 'All' ? 'btn-primary' : 'btn-ghost'}`}
            >
              All
            </button>
            {courses.categories?.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`btn ${activeCategory === category ? 'btn-primary' : 'btn-ghost'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Courses Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                <figure>
                  <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                  {!course.inStock && (
                    <div className="badge badge-error absolute top-2 right-2">Out of Stock</div>
                  )}
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{course.title}</h3>
                  <p className="text-gray-600">By {course.instructor}</p>
                  <div className="flex items-center mt-2">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          name={`rating-${course.id}`}
                          className="mask mask-star-2 bg-orange-400"
                          checked={i < Math.floor(course.rating)}
                          readOnly
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm">
                      {course.rating} ({course.students}+)
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold">${course.price}</span>
                    <button
                      onClick={() => addToCart(course)}
                      className="btn btn-primary btn-sm"
                      disabled={!course.inStock}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* WhatsApp Chat */}
      <div className="fixed bottom-6 right-6">
        <button className="btn btn-circle btn-success text-white text-2xl">
          <i className="fab fa-whatsapp"></i>
        </button>
      </div>

      
    </div>
  );
};

export default CategorySec;