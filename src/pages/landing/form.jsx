// import React from "react";
// import { motion } from "framer-motion";

// const ContactUs = () => {
//   return (
//     <section className="bg-green-50 py-16 px-6">
//       <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Contact Us</h2>
//         <p className="text-gray-600 text-center mb-8">
//           Have questions? Feel free to reach out to us!
//         </p>

//         <motion.form
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="space-y-6"
//         >
//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//           </div>

//           {/* Message Input */}
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Message</label>
//             <textarea
//               rows="5"
//               placeholder="Type your message here..."
//               className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-all"
//           >
//             Send Message
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xovjorbj"); // Ensure this is your correct Formspree ID

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Contact Us</h2>
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
