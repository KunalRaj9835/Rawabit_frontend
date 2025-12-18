"use client"
import React from 'react';
import { Shield } from 'lucide-react';
import Link from "next/link";


export default function AboutUsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 order-1 lg:order-1">
            <div>
               <div className=" mb-12">
          <h2 className="text-3xl font-light text-[0E355D]">
            About Us
          </h2>
          <div className="h-1 w-20 bg-red-500 mt-3 rounded-full" />
        </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Professional Networking & Technology Experts
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At <span className="font-semibold text-gray-900">Rawabit Networks</span>, we specialize in designing and delivering{' '}
                <span className="font-semibold text-gray-900">
                  secure, scalable, and high-performance IT infrastructure
                </span>{' '}
                for businesses of all sizes. From advanced{' '}
                <span className="font-semibold text-gray-900">network setups</span> to{' '}
                <span className="font-semibold text-gray-900">
                  cybersecurity and unified communications
                </span>
                , we help organizations thrive in today's connected world.
              </p>
              <p>
                Our mission is simple — to{' '}
                <span className="font-semibold text-gray-900">
                  connect people and businesses through innovative technology
                </span>{' '}
                that drives efficiency, safety, and growth.
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-4">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <span className="text-red-600 font-semibold text-lg">
                Certified Technology Provider
              </span>
            </div>

            <div className="pt-4">
  <Link
    href="/about"
    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
  >
    Read More
  </Link>
</div>

          </div>

          {/* Image Section */}
          <div className="relative order-2 lg:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=900&fit=crop"
                alt="Data Center Infrastructure"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}