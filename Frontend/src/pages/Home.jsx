import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://external-preview.redd.it/for-those-who-work-out-without-a-bench-ive-shared-a-v0-kA63OCVvonmQNt4TdUWZ7gMFjQGCZdbh7VmcdAabqvA.jpg?width=1080&crop=smart&auto=webp&s=2081e805c0824e8cb9f727b66ded78ac90efa1be",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnd1_leBen8AFI9zlKmzeCHnsktJfO544LCnltuT1C-hzYSkAF5BL2JMiT1d14d0OR0fM&usqp=CAU",
    "https://external-preview.redd.it/if-youre-looking-for-a-complete-30-day-dumbbell-workout-v0-_0GOetJLfJ8QfuHiSg8kEOdXNEE_-Hc2TzIoMcCB868.jpg?width=1080&crop=smart&auto=webp&s=6533cc5523cec9368a9b09fb5d2fe6ec1e9343a4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0IYF21DR21v5kevZwAwV0bD4vrbkc9ey5BFbgNyUXV5JrIbrMrX_rfsC07_UZVh5NMc&usqp=CAU",
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Auto slide change every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen text-white flex flex-col justify-center items-center">
      {/* Slideshow Section */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Featured Workouts
        </h2>
        <div className="relative">
          <div className="carousel w-full">
            <div className="carousel-item w-full">
              <img
                src={slides[currentIndex]}
                alt={`Workout ${currentIndex + 1}`}
                className="w-full rounded-xl shadow-2xl transition-transform transform hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Carousel navigation buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none transition duration-300"
            >
              <i className="fas fa-chevron-left text-xl"></i>
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-white text-blue-600 p-3 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none transition duration-300"
            >
              <i className="fas fa-chevron-right text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Explore Our Features
        </h2>

        {/* Cards for Workout Plans and Exercises */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Workout Plans
            </h3>
            <p className="text-gray-600 mb-4">
              Browse through personalized workout plans to achieve your fitness
              goals.
            </p>
            <Link
              to="/workout-plans"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Plans
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Exercises
            </h3>
            <p className="text-gray-600 mb-4">
              Discover a variety of exercises with detailed instructions and
              videos.
            </p>
            <Link
              to="/exercises"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Exercises
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Fitness Progress
            </h3>
            <p className="text-gray-600 mb-4">
              Track your fitness progress over time with detailed analytics.
            </p>
            <Link
              to="/progress"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Progress
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-gray-50 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full sm:w-1/3 transition transform hover:scale-105">
            <p className="text-gray-700 mb-4">
              "This platform has truly transformed my fitness journey. The
              personalized workout plans are amazing!"
            </p>
            <h4 className="text-xl font-semibold text-gray-800">John Doe</h4>
            <p className="text-gray-500">Fitness Enthusiast</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-xl w-full sm:w-1/3 transition transform hover:scale-105">
            <p className="text-gray-700 mb-4">
              "The progress tracking is fantastic. I can see my improvements
              week by week."
            </p>
            <h4 className="text-xl font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-gray-500">Dedicated Member</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full bg-blue-600 text-center py-12 mt-16 rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-lg text-white mb-8">
          Sign up today and take your fitness journey to the next level!
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
