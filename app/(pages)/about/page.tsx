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
          <Link href="/buy">Buy</Link>
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
      <footer className="bg-black text-gray-400 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 border-t border-gray-700">

          <div>
            <h3 className="text-white font-semibold mb-2">
              Azure Estate Quick Links
            </h3>
            <p className="text-sm">
              Experience luxury real estate with modern design and seamless buying.
            </p>

            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800">
                <FaFacebookF size={14} className="text-white" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800">
                <FaInstagram size={14} className="text-white" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800">
                <FaTwitter size={14} className="text-white" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm mb-3">Contact</h4>
            <p className="text-sm">support@azureestate.com</p>
            <p className="text-sm mt-1">(123) 456-7890</p>
          </div>

          <div>
            <h4 className="text-white text-sm mb-3">Newsletter</h4>
            <div className="flex">
              <input className="w-full p-2 bg-gray-800 border border-gray-700 text-sm rounded-l-md" />
              <button className="bg-blue-600 px-4 rounded-r-md text-sm">
                →
              </button>
            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}