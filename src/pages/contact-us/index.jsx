import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xovjorbj"); // Ensure this is your correct Formspree ID

  return (
    <section className="py-16 bg-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Contact Peterson</h2>
        <p className="text-center text-gray-600 mb-8">
          Have any questions? Feel free to send us a message!
        </p>

        {state.succeeded ? (
          <p className="text-center text-green-700 text-lg font-semibold">
            ✅ Thank you for your message! We will get back to you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
          >
            {/* Email Input */}
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            {/* Message Input */}
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
