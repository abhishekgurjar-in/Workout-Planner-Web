

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Workout Planner</h1>
      
      <section className="space-y-8">
        {/* Company Overview */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-semibold text-blue-600">Our Story</h2>
          <p className="text-lg text-gray-700">
            At **Workout Planner**, our mission is to empower individuals to take control of their fitness journeys with personalized workout plans 
            that adapt to their unique goals and progress. Whether you're aiming to lose weight, build muscle, or increase endurance, our platform helps 
            you stay on track and motivated. We believe that fitness is for everyone, and we are here to make it as simple and effective as possible.
          </p>
        </div>

        {/* Our Vision */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-semibold text-blue-600">Our Vision</h2>
          <p className="text-lg text-gray-700">
            Our vision is to be the leading workout platform, offering customized fitness plans that cater to individuals at any level. 
            We want to make planning and tracking workouts easier and more enjoyable, ensuring that users can see real progress in their fitness 
            journey while staying motivated with our user-friendly tools and engaging features.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-semibold text-blue-600">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is simple: to help you achieve your fitness goals through personalized workout plans and tracking tools that 
            evolve with your progress. We aim to support our community by providing expert-designed workout routines and a space to share success stories, 
            creating a motivating environment for everyone to push their limits.
          </p>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-center text-blue-600">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="data:image/jpeg;base64,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" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Co-Founder</p>
              <p className="text-gray-500">John is a fitness enthusiast and entrepreneur with a passion for helping people live healthier lives through structured workout plans.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://t3.ftcdn.net/jpg/06/80/11/24/360_F_680112469_dfm5KgM55VBfZ4kNzoPzeiApyayLhCKh.jpg" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Product Development</p>
              <p className="text-gray-500">Jane is an expert in fitness technology, working to create intuitive and effective tools that make it easier for users to achieve their fitness goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=" alt="Team Member" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Sara Lee</h3>
              <p className="text-gray-600">Lead Developer</p>
              <p className="text-gray-500">Sara is passionate about building seamless user experiences, ensuring that Workout Planner is easy to use and always up to date with the latest fitness trends.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-800 text-white p-6 rounded-lg text-center">
          <h2 className="text-3xl font-semibold mb-4">Start Your Fitness Journey Today!</h2>
          <p className="text-lg mb-6">Take the first step towards achieving your fitness goals. Sign up today and begin planning your personalized workouts with ease!</p>
          <a href="/signup" className="bg-blue-500 px-6 py-3 rounded-lg text-white text-lg hover:bg-blue-600 transition">Sign Up Now</a>
        </div>
      </section>
    </div>
  );
};

export default About;
