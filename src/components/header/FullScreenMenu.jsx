import { useState } from "react";

const navItems = [
  {
    label: "Research",
    subItems: [
      "Generative AI",
      "Computational Microbiology",
      "Computational Oncology",
      "Health Systems at scale",
      "Population Genetics",
      "Digital Pathology",
      "Virtual Reality and Human-Computer Interaction",
    ],
  },
  { label: "Publications" },
  { label: "News" },
  { label: "Contribute" },
  { label: "Join Us" },
];

const FullScreenMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-2">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-bold text-lg text-gray-800">
            Health Data Science Lab
          </span>
        </div>

        {/* Hamburger Toggle (mobile only) */}
        <button
          className="md:hidden block text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <span className="cursor-pointer text-gray-700 hover:text-blue-600 font-semibold">
                {item.label}
              </span>
              {/* Hover Dropdown for sub-items */}
              {item.subItems && (
                <ul
                  className="
                    absolute left-0 mt-2 w-56 bg-white border border-gray-200
                    shadow-lg rounded-md hidden group-hover:block
                  "
                >
                  {item.subItems.map((sub, subIdx) => (
                    <li
                      key={subIdx}
                      className="
                        px-4 py-2 text-gray-700
                        hover:bg-gray-100
                        cursor-default
                      "
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (collapsible) */}
      {mobileOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 border-t border-gray-200">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <div className="font-semibold text-gray-700">{item.label}</div>
              {/* Sub-items always shown or we can toggle them */}
              {item.subItems && (
                <ul className="pl-4 mt-1 space-y-1">
                  {item.subItems.map((sub, subIdx) => (
                    <li key={subIdx} className="text-gray-600 cursor-default">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default FullScreenMenu;
