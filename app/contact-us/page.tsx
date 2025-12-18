"use client";

import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div
  className="relative py-20 bg-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: "url('/contact/contact.jpg')",
  }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
      Contact
    </h1>
    <p className="text-gray-300 text-lg font-light">
      Get In Touch With Us
    </p>
  </div>
</div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        {/* Contact Info and Form Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Left Side - Contact Information */}
          <div>
            <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-4">
              Get In Touch
            </p>
            
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6">
              Any Question?<br />Write Down And Send Us
            </h2>
            
            <p className="text-gray-600 font-light leading-relaxed mb-12">
              For more information, solution enquiries, service questions – or just to express your thoughts – whatever be the case – please contact us.
            </p>

            {/* Office Card */}
            <div className="bg-white rounded-xl p-8 border border-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-4">
                Main Office
              </p>

              <h3 className="text-2xl font-light mb-6 text-gray-900">
                Fahad International Group
              </h3>

              <div className="space-y-4 text-gray-700 font-light leading-relaxed">
                <p>Abi Al Barkat, Building No: 02,</p>
                <p>Riyadh 11417, Saudi Arabia</p>
                
                <div className="pt-6 border-t border-gray-300">
                  <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-3">
                    Make a Call
                  </p>
                  <p className="mb-1">+966 50 414 2951</p>
                  <p>+966 11 516 0125</p>
                </div>

                <div className="pt-6 border-t border-gray-300">
                  <p className="text-red-500 font-light text-sm uppercase tracking-wide mb-3">
                    Send a Mail
                  </p>
                  <p>info@rawabitnetworks.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
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

        {/* Map Section */}
        <div className="bg-white rounded-xl overflow-hidden border border-black shadow-xl">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-light text-gray-900">Visit Us</h3>
            <p className="text-gray-600 font-light mt-2">Fahad International Group - Abi Al Barkat, Building No: 02, Riyadh 11417, Saudi Arabia</p>
          </div>
          
          <div className="relative w-full h-96 bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7297676984207!2d46.7177778!3d24.73583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0399b6d3e3e3%3A0x3e3e3e3e3e3e3e3e!2sAbi%20Al%20Barkat%2C%20Riyadh%2011417%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}