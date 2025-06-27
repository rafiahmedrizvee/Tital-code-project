import React from 'react';

const Contact = () => {
        return (
                <div className=" bg-gray-100 flex items-center justify-center p-4">
                <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
                  <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Contact Titan Code Technologies
                  </h1>
                  <p className="text-gray-600 text-center mb-8">
                    Have a question or want to collaborate? We’d love to hear from you! Reach out through the form below or contact us via email or phone.
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                  <div className="mt-8 text-center">
                    <p className="text-gray-600">
                      Email: <a href="mailto:contact@titancode.com" className="text-blue-600 hover:underline">contact@titancode.com</a>
                    </p>
                    <p className="text-gray-600">
                      Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
                    </p>
                  </div>
                </div>
              </div>
        );
};

export default Contact;