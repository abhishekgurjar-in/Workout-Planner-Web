import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields");
      return;
    }

    // For demonstration, we'll show success without actual backend submission.
    // This is where you would integrate an email service like EmailJS, or call an API endpoint.
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setError("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>

      {/* Error message */}
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg mb-6">{error}</div>
      )}

      {/* Success message */}
      {success && (
        <div className="bg-green-500 text-white p-4 rounded-lg mb-6">
          Your message has been sent successfully!
        </div>
      )}

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          For any inquiries, please feel free to reach out. We’d love to hear
          from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
