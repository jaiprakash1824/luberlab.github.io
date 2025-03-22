import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContactButton from "./ContactButton";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const baseURL = import.meta.env.BASE_URL;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateNavbar(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setMobileOpen(false);
  };

  const menuItems = [
    { label: "Home", path: "/", subItems: ["Intro", "Innovation Spectrum"] },
    {
      label: "Research",
      path: "/research",
      subItems: [
        "Generative AI",
        "Computational Microbiology",
        "Computational Oncology",
        "Health Systems at Scale",
        "Population Genetics",
        "Digital Pathology",
        "Virtual Reality and Human-Computer Interaction",
      ],
    },
    {
      label: "Publications",
      path: "/publications",
      subItems: ["All Publications"],
    },
    { label: "News", path: "/news", subItems: ["All News"] },
    { label: "People", path: "/teams", subItems: ["All People"] },
  ];

  return (
    <>
      <div
        className={`
          w-[85%] mx-auto bg-white relative z-10 transition-all duration-1000 mt-2 font-bricky
          ${animateNavbar ? "animate-navbarSlideDown" : ""}
        `}
      >
        <div className="flex items-center px-3 sm:px-5 h-16 sm:h-[70px]">
          {/* Logo (Left) */}
          <div className="flex-none">
            <div className="flex items-center">
              <img
                src={`${baseURL}assets/logo.png`}
                alt="Logo"
                className="h-12 w-auto sm:h-16"
              />
              <div className="ml-2 sm:ml-3 text-base sm:text-xl font-bold leading-tight">
                <span className="block text-primary">Health and</span>
                <span className="block text-primary">Data Science Lab</span>
              </div>
            </div>
          </div>

          {/* Nav Items (Right-aligned on Desktop) */}
          <ul className="hidden sm:flex flex-1 justify-end space-x-8 items-center">
            {menuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={idx} className="relative group">
                  <span
                    onClick={() => handleNavClick(item.path)}
                    className={`
                      cursor-pointer font-semibold
                      ${
                        isActive
                          ? "text-primary"
                          : "text-gray-700 hover:text-blue-600"
                      }
                    `}
                  >
                    {item.label}
                  </span>
                  {/* Hover Dropdown (Informational only) */}
                  {item.subItems && (
                    <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md hidden group-hover:block">
                      {item.subItems.map((sub, sIdx) => (
                        <li
                          key={sIdx}
                          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-default"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* "Join us" Button - only on large screens (lg) and above */}
          <div className="hidden lg:block flex-none ml-4">
            <ContactButton title="Join us" onClick={handleContactClick} />
          </div>

          {/* Hamburger (Mobile Only) */}
          <button
            className="sm:hidden ml-auto text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setMobileOpen(true)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Mobile Nav Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <img
                src={`${baseURL}assets/logo.png`}
                alt="Logo"
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg text-gray-800">
                Health and Data Science Lab
              </span>
            </div>
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setMobileOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-4">
              {menuItems.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={idx}>
                    <div
                      onClick={() => handleNavClick(item.path)}
                      className={`
                        font-semibold cursor-pointer py-2
                        ${
                          isActive
                            ? "text-primary"
                            : "text-gray-700 hover:text-blue-600"
                        }
                      `}
                    >
                      {item.label}
                    </div>
                    {item.subItems && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.subItems.map((sub, subIdx) => (
                          <li
                            key={subIdx}
                            className="text-gray-600 cursor-default"
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
              {/* "Join us" always shown on mobile */}
              <li className="mt-4">
                <ContactButton title="Join us" onClick={handleContactClick} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
