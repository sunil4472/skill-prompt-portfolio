import React from "react";

import { Mail, Phone, MapPin, Send } from "lucide-react";
const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12  inline-block pb-2">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-50 mb-12">
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Sunil "
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="neupanesunil472@gmail.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1 bg-gradient-to-br p-8 rounded-2xl text-5xl">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Contact Info
            </h3>
            <ul className="space-y-6 text-gray-700 text-base">
              <li className="flex items-start gap-8">
                <Mail className="w-12 h-12 p-2 text-blue-600 rounded-xl bg-gray-300 border-black  mt-1" />
                <div>
                  <p className="font-semibold text-2xl">Email</p>
                  <p>neupanesunil472@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-8 mt-15">
                <Phone className="w-12 h-12 p-2 text-blue-600 rounded-xl bg-gray-300 border-black  mt-1" />
                <div>
                  <p className="font-semibold text-2xl">Phone</p>
                  <p>+977 980000000</p>
                </div>
              </li>
              <li className="flex items-start gap-8 mt-15">
                <MapPin className="w-12 h-12 p-2 text-blue-600 rounded-xl bg-gray-300 border-black  mt-1" />
                <div>
                  <p className="font-semibold text-2xl">Address</p>
                  <p className="">Butwal, Rupandehi, Nepal</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-[300px] rounded overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.666623765045!2d83.46265661506135!3d27.688413732886746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996857a1d60b5a1%3A0x2f8e9c07e92a9a8!2sButwal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
