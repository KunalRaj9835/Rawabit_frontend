"use client";

import React, { useState } from "react";

export default function ITSolutionsHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Quote request submitted! We will contact you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="
  relative bg-white 
  shadow-md hover:shadow-xl
  transition-all duration-300
">

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side */}
          <div className="text-gray-900">
            <p className="text-red-500 font-light text-lg mb-4">
              Don't Know What To Start With?
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-light leading-tight mb-8">
              Get the Right IT Solution for Your Business
            </h1>

            {/* Office Card */}
            <div className="
  mt-12 bg-white rounded-xl p-8
  border border-black
  shadow-xl hover:shadow-2xl
  hover:-translate-y-1
  transition-all duration-300
">

              <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-4">
                Offices
              </p>

              <h2 className="text-2xl font-light mb-6">Head Office</h2>

              <div className="space-y-2 text-gray-700 font-light leading-relaxed">
                <p>Build No. 8647, Prince Fahad Bin Ibrahim Al Saud Street,</p>
                <p>Al Malaz Dist, Riyadh, Saudi Arabia-12642</p>
                <p className="mt-4 pt-4 border-t border-black">
                  Phone: +966 50 414 2951
                </p>
                <p>Email: info@rawabitnetworks.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="
  bg-white rounded-xl p-8 lg:p-10
  border border-black
  shadow-xl hover:shadow-2xl
  hover:-translate-y-1
  transition-all duration-300
">

            <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-2">
              Free Consultation
            </p>

            <h2 className="text-3xl lg:text-[2.5rem] font-light text-gray-900 mb-2">
              Get A Free Quote
            </h2>

            <div className="h-1 w-16 bg-red-500 rounded-full mb-8"></div>

            <div className="space-y-5">
              {[
                { name: "fullName", placeholder: "Enter your full name", type: "text" },
                { name: "phone", placeholder: "Phone number", type: "tel" },
                { name: "email", placeholder: "Your email", type: "email" },
                { name: "service", placeholder: "Service description", type: "text" },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  name={field.name}
                  value={(formData as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-5 py-3.5 border border-black rounded-lg outline-none font-light text-gray-900 placeholder:text-gray-400"
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full px-5 py-3.5 border border-black rounded-lg outline-none resize-none font-light text-gray-900 placeholder:text-gray-400"
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-black text-white font-light tracking-wide py-4 px-6 rounded-lg uppercase text-sm hover:bg-gray-900 transition"
              >
                Get A Free Quote
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
