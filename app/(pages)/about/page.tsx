"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-[#f8fafc]">

      {/* NAVBAR */}
      <nav className="w-full grid grid-cols-3 items-center px-8 py-4 bg-white border-b">

        <h1 className="text-lg font-semibold text-gray-900">
          AzureEstate
        </h1>

        <div className="hidden md:flex justify-center gap-8 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/buypage">Buy</Link>
        </div>

        <div className="flex justify-end items-center gap-4">
          <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 w-40"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Contact
          </button>
        </div>
      </nav>

      {/* HERO / INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="text-sm text-gray-500 mb-2">
            REAL ESTATE EXPERT
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Guided by Trust. <br /> Driven by Experience.
          </h1>

          <p className="text-gray-600 max-w-md">
            We help clients navigate real estate with confidence,
            offering expert guidance and tailored solutions for every step.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="max-w-md justify-self-end">
          <img
            src="/Assets/randomrealator.jpg"
            className="rounded-sm w-[350px] h-[500px] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* INFO + CONTACT */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            The Client-First Philosophy
          </h2>

          <p className="text-gray-600 mb-6">
            Every decision we make is centered around delivering the best
            possible outcome for our clients. Transparency, trust, and
            performance drive everything we do.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 px-10 pt-14 pb-10 text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start text-center md:text-left">
   
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-3">Azure Estate</h3>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Expertise in luxury real estate, specializing in high-net-worth clientele and prestigious communities.
            </p>

            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 bg-gray-800 rounded-md" />
              <div className="w-8 h-8 bg-gray-800 rounded-md" />
              <div className="w-8 h-8 bg-gray-800 rounded-md" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium mb-3">HEADQUARTERS</h3>
            <p className="text-gray-500 leading-relaxed">
              422 Pine Street, Suite A<br />
              San Francisco, CA 94102
            </p>
            <p className="mt-3">(209) 555-8743</p>
            <p>contact@azureestate.com</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium mb-3">EXPLORE</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Featured Homes</li>
              <li className="hover:text-white cursor-pointer">Market Reports</li>
              <li className="hover:text-white cursor-pointer">Recent Sales</li>
              <li className="hover:text-white cursor-pointer">Our Team</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center">
          <p>© 2025 Azure Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
          </div>
        </div>
      </footer>

    </main>
  );
}