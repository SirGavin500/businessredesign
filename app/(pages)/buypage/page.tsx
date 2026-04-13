import React from "react";

export default function AzureEstate() {
  return (
    <div className="bg-white text-gray-900">
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white border-b">
        <h1 className="text-lg font-semibold text-blue-900">
          AzureEstate
        </h1>

        <div className=" md:flex gap-8 text-sm text-gray-600">
          <a href="#">Home</a>
          <a href="/buypage">Buy</a>
          <a href="#">About</a>
        </div>

        <div className="flex items-center gap-4">
          
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

      <section className="px-10 py-16 max-w-6xl mx-auto">
        <p className="text-xs tracking-widest text-gray-500 mb-4">
          TAILORED REAL ESTATE SERVICES
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Elevate your living. <br /> Curate your legacy.
        </h1>
        <p className="text-gray-500 max-w-xl">
          Whether you are acquiring a coastal sanctuary or parting with a family estate, Azure Estate provides the architectural eye and institutional trust required for luxury transitions.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-16 px-10 py-16 max-w-6xl mx-auto items-center">
        <div className=" rounded-2xl h-[420px] flex items-end justify-start p-6 shadow-lg">
          <img src="../assets/house.jpg" alt="house" className=" inset-0 w-full h-full object-cover"/>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Buying with Precision</h2>
          <p className="text-gray-500 mb-6">
            Finding a home is more than a search; it's a curation process. We leverage deep market analytics and architectural insight to find properties that match your lifestyle and investment goals.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">✓</div>
              <div>
                <p className="font-medium">Bespoke Search Strategy</p>
                <p className="text-gray-500 text-xs">Tailored property identification based on architecture and location.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-xs">✓</div>
              <div>
                <p className="font-medium">Negotiation Excellence</p>
                <p className="text-gray-500 text-xs">Ensuring value and seamless escrow transitions.</p>
              </div>
            </div>
          </div>

          <button className="mt-6 underline text-sm">
            Explore Current Listings
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-16 px-10 py-16 max-w-6xl mx-auto items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Strategic Selling</h2>
          <p className="text-gray-500 mb-8 max-w-md">
            Our approach to selling treats your property as a masterpiece. We combine high-end editorial photography with targeted digital narratives.
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-white shadow-md rounded-xl border hover:shadow-lg transition">
              <p className="font-medium">Architectural Staging</p>
              <p className="text-gray-500 text-xs mt-1">
                We emphasize the unique design language of your home.
              </p>
            </div>

            <div className="p-5 bg-white shadow-md rounded-xl border hover:shadow-lg transition">
              <p className="font-medium">Data-Driven Valuation</p>
              <p className="text-gray-500 text-xs mt-1">
                Real-time market insights position your estate perfectly.
              </p>
            </div>
          </div>

          <button className="mt-6 underline text-sm">Request Valuation</button>
        </div>

        <div className="bg-gray-100 rounded-2xl h-[420px] shadow-inner" >
          <img src="../assets/ihouse.jpg" alt="house" className=" inset-0 w-full h-full object-cover"/>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white py-20 px-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold">The Azure Advantage</h2>
          <p className="text-gray-400 mt-2">
            Beyond the transaction, we offer a comprehensive suite of concierge services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">

          <div className="grid grid-rows-2 gap-6">
            <div className="bg-gray-800/80 backdrop-blur p-6 rounded-2xl">
              <p className="font-medium">Legal Escrow</p>
              <p className="text-gray-400 text-xs mt-2">Verified trust and secure transactions.</p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur p-6 rounded-2xl">
              <p className="font-medium">Global Network</p>
              <p className="text-gray-400 text-xs mt-2">Connections across elite markets worldwide.</p>
            </div>
          </div>

          <div className="bg-blue-900 p-6 rounded-2xl flex flex-col justify-between h-full">
            <div>
              <p className="font-medium text-lg">Portfolio Management</p>
              <p className="text-gray-200 text-sm mt-3">
                Multi-property advisory services for private investors and family offices looking to expand or diversify real estate holdings.
              </p>
            </div>

            <button className="mt-6 text-xs underline self-start">
              Consult Advisor
            </button>
          </div>

          <div className="grid grid-rows-2 gap-6">
            <div className="bg-gray-800/80 backdrop-blur p-6 rounded-2xl">
              <p className="font-medium">White-Olove Closings</p>
              <p className="text-gray-400 text-xs mt-2">A seamless end-to-end closing experience.</p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur p-6 rounded-2xl">
              <p className="font-medium">Market Intelligence</p>
              <p className="text-gray-400 text-xs mt-2">Strategic insights into luxury trends.</p>
            </div>
          </div>
        </div>
      </section>

      
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
    </div>
  );
}
