import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#f8fafc]">
      {/* NAVBAR */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white border-b">
        <h1 className="text-lg font-semibold text-blue-900">
          AzureEstate
        </h1>

        {/* LEFT: LINKS ONLY */}
        <div className=" md:flex gap-8 text-sm text-gray-600">
          <a href="#">Home</a>
          <a href="/buypage">Buy</a>
          <a href="#">About</a>
        </div>

        {/* RIGHT: SEARCH + CONTACT */}
        <div className="flex items-center gap-4">
          
          {/* SEARCH */}
          <div className="bg-gray-100 px-3 py-1 rounded-md border border-gray-200">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 w-40"
            />
          </div>

          {/* CONTACT */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Contact
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative w-full h-[600px] md:h-[650px]">
        <img
          src="/Assets/estate.png"
          alt="house"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center px-6 md:pl-0">
          <p className="text-sm text-gray-200 mb-2">
            LUXURY REAL ESTATE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white max-w-xl leading-tight">
            Looking to buy a house?
          </h1>

          <p className="text-gray-200 mt-4 max-w-md">
            Discover the best modern homes in your area.
            Experience a seamless search and find your dream home.
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 px-6 py-3 rounded-md text-white text-sm">
              Buy a House
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-md text-sm">
              Explore Gallery
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 mt-12 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* FORM CARD */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Pre-Qualify
            </h2>

            <div className="space-y-3">
              <input
                placeholder="Name"
                className="w-full border p-3 rounded-md text-sm text-gray-900 placeholder:text-gray-400"
              />

              <input
                placeholder="Email"
                className="w-full border p-3 rounded-md text-sm text-gray-900 placeholder:text-gray-400"
              />

              <input
                placeholder="Income"
                className="w-full border p-3 rounded-md text-sm text-gray-900 placeholder:text-gray-400"
              />
            </div>

            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md text-sm">
              Submit Application
            </button>
          </div>

          {/* IMAGE CARD */}
          <div className="relative">
            <img
              src="/Assets/couch.png"
              alt="interior"
              className="rounded-xl w-full h-[260px] md:h-full object-cover shadow-md"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow text-sm max-w-[200px]">
              <p className="font-semibold text-gray-900">
                Personal Concierge
              </p>
              <p className="text-gray-500 text-xs mt-1">
                We help you find the perfect home easily
              </p>
            </div>
          </div>
        </div>

        {/* LOAN SECTION */}
        <div className="mt-14">
          <h2 className="text-lg font-semibold mb-6 text-gray-900">
            Loan Estimate Overview
          </h2>

          {/* SMALL CARDS */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl border shadow-sm">
              <p className="text-xs text-gray-500 mb-1">
                MONTHLY PAYMENT
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                $18,500
              </h3>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow-sm">
              <p className="text-xs text-gray-500 mb-1">
                HOME VALUE
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                $425,000
              </h3>
            </div>
          </div>

          {/* BIG DARK CARD */}
          <div className="bg-[#111827] text-white rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs text-gray-400">
                ESTIMATED TOTAL COST
              </p>
              <h3 className="text-3xl font-bold mt-1">
                $1,250,000
              </h3>

              <div className="flex gap-6 mt-4 text-sm text-gray-400">
                <span>Interest Rate: 3.5%</span>
                <span>Loan Term: 30 yrs</span>
              </div>
            </div>

            <button className="mt-4 md:mt-0 bg-blue-600 px-5 py-2 rounded-md text-sm">
              Get Pre-Approved
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 border-t border-gray-700">

          {/* LEFT */}
          <div>
            <h3 className="text-white font-semibold mb-2">
              Azure Estate Quick Links
            </h3>
            <p className="text-sm">
              Experience luxury real estate with modern design and seamless buying.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
              >
                <FaFacebookF size={14} className="text-white" />
              </a>

              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500 transition"
              >
                <FaInstagram size={14} className="text-white" />
              </a>

              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition"
              >
                <FaTwitter size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm mb-3">
              Contact
            </h4>
            <p className="text-sm">support@azureestate.com</p>
            <p className="text-sm mt-1">(123) 456-7890</p>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-white text-sm mb-3">
              Newsletter
            </h4>
            <div className="flex">
              <input
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-md bg-gray-800 border border-gray-700 text-sm"
              />
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