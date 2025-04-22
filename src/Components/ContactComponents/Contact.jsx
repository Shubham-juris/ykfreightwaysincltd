import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Add logic to send form data
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/37646/new-york-skyline-new-york-city-city-37646.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800/70 to-blue-950/70 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl p-10 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-blue-200"
      >
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8 tracking-wide">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center gap-2 text-blue-800 font-medium mb-1">
              <User className="w-5 h-5" /> Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-blue-800 font-medium mb-1">
              <Mail className="w-5 h-5" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-blue-800 font-medium mb-1">
              <MessageSquare className="w-5 h-5" /> Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              placeholder="Tell us something..."
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:from-cyan-600 hover:to-blue-700 transition duration-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
