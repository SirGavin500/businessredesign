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

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
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

        <div className="max-w-md justify-self-end">
          <img
            src="/Assets/randomrealator.jpg"
            className="rounded-sm w-[350px] h-[500px] object-cover shadow-lg"
          />
        </div>
      </section>

      {/* 🔥 NEW SECTION (WHAT YOU NEEDED) */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            The Client-First Philosophy
          </h2>

          <p className="text-gray-600 mb-4">
            With years of dedicated service across Northern California, Val has
            established a reputation for excellence built on transparency and integrity.
            Every transaction is more than a deal; it’s a milestone that deserves attention.
          </p>

          <p className="text-gray-600 mb-8">
            Whether you are a first-time homebuyer or an investor, our approach ensures
            your goals stay the focus.
          </p>

          {/* FEATURE BOXES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
              <p className="font-semibold text-gray-900">Licensed Agent</p>
              <p className="text-xs text-gray-500 mt-1">CAL DRE #01928374</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
              <p className="font-semibold text-gray-900">Top Producer</p>
              <p className="text-xs text-gray-500 mt-1">Northern California 2023</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm border text-center">
              <p className="font-semibold text-gray-900">Local Native</p>
              <p className="text-xs text-gray-500 mt-1">Expert Market Knowledge</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTACT CARD */}
        <div className="bg-white rounded-2xl shadow-md border p-6 w-full max-w-sm ml-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Direct Contact
          </h3>

          <div className="space-y-4 text-sm text-gray-600">
            <div>
              <p className="text-gray-400 text-xs">CALL / TEXT</p>
              <p className="font-medium text-gray-900">(209) 539-9763</p>
            </div>

            <div>
              <p className="text-gray-400 text-xs">EMAIL</p>
              <p className="font-medium text-gray-900">
                norcalrealtorval@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-xs">OFFICE</p>
              <p className="font-medium text-gray-900">
                425 Pine Street, Suite 1-A<br />
                Galt, CA 95632
              </p>
            </div>
          </div>

          <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md text-sm">
            Book a Consultation
          </button>

          <p className="text-xs text-gray-400 text-center mt-2">
            Typically responds within 2 hours
          </p>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Areas of Focus
            </h2>
            <p className="text-gray-500 text-sm">
              Expertise across Sacramento Valley communities.
            </p>
          </div>

          <button className="text-sm text-gray-600 hover:text-black">
            Explore Neighborhoods →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="relative rounded-xl overflow-hidden group">
            <img src="/Assets/galt.jpg" className="w-full h-72 object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="font-semibold">Galt</h3>
              <p className="text-xs opacity-80">Community & Tradition</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden group">
            <img src="/Assets/sacramento.jpg" className="w-full h-72 object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="font-semibold">Sacramento</h3>
              <p className="text-xs opacity-80">Metropolitan Living</p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden group">
            <img src="/Assets/lodi.jpg" className="w-full h-72 object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="font-semibold">Lodi</h3>
              <p className="text-xs opacity-80">Wine Country Estates</p>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 px-10 pt-14 pb-10 text-sm border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start text-center md:text-left">
   
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-semibold mb-3">Azure Estate</h3>
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Expertise in luxury real estate, specializing in high-net-worth clientele.
            </p>

            <div className="flex gap-3 mt-4">
              <div className="w-8 h-8 bg-gray-800 rounded-md" />
              <div className="w-8 h-8 bg-gray-800 rounded-md" />
              <div className="w-8 h-8 bg-gray-800 rounded-md" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium mb-3">HEADQUARTERS</h3>
            <p>422 Pine Street, Suite A<br />San Francisco, CA 94102</p>
            <p className="mt-3">(209) 555-8743</p>
            <p>contact@azureestate.com</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium mb-3">EXPLORE</h3>
            <ul className="space-y-2">
              <li>Featured Homes</li>
              <li>Market Reports</li>
              <li>Recent Sales</li>
              <li>Our Team</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>

    </main>
  );
}