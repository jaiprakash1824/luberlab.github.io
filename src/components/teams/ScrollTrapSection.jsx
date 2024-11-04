/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from "react";
import "./ScrollTrapSection.css";

const ScrollTrapSection = () => {
  const directorRef = useRef(null);
  const postdocRef = useRef(null);
  const baseURL = import.meta.env.BASE_URL;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Lock into the postdoc section when scrolled more than 75% into it
          if (entry.isIntersecting) {
            if (entry.target === postdocRef.current) {
              document.getElementById("postdoc-image").style.opacity = "1";
              document.getElementById("postdoc-image").style.transform =
                "translateY(0)";
              document.getElementById("director-image").style.opacity = "0";
              document.getElementById("director-image").style.transform =
                "translateY(20px)";
            } else if (entry.target === directorRef.current) {
              document.getElementById("postdoc-image").style.opacity = "0";
              document.getElementById("postdoc-image").style.transform =
                "translateY(20px)";
              document.getElementById("director-image").style.opacity = "1";
              document.getElementById("director-image").style.transform =
                "translateY(0)";
            }
          }
        });
      },
      {
        threshold: 0.75, // Change the image when 75% of the section is visible
      }
    );

    if (directorRef.current) {
      observer.observe(directorRef.current);
    }
    if (postdocRef.current) {
      observer.observe(postdocRef.current);
    }

    return () => {
      if (directorRef.current) {
        observer.unobserve(directorRef.current);
      }
      if (postdocRef.current) {
        observer.unobserve(postdocRef.current);
      }
    };
  }, []);

  const director = {
    photo: baseURL + "assets/images/jacob.jpg",
    name: "Dr. John Doe",
    title: "Director",
    bio: "Dr. Doe is focused on advancing healthcare through data science...",
    researchAreas: ["Generative AI", "Medical Imaging", "Population Genetics"],
  };

  const postdoc = {
    photo: baseURL + "assets/images/shang.jpeg",
    name: "Dr. Jane Smith",
    title: "Postdoc",
    bio: "Dr. Smith specializes in computational oncology and bioinformatics...",
    researchAreas: ["Computational Microbiology", "Digital Pathology"],
  };

  return (
    <div className="flex h-screen snap-y snap-mandatory overflow-y-scroll custom-scrollbar">
      {/* Left side - Two separate images */}
      <div className="w-1/3 h-full relative hidden md:block">
        <img
          id="director-image"
          src={director.photo}
          alt={director.name}
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-1 absolute"
        />
        <img
          id="postdoc-image"
          src={postdoc.photo}
          alt={postdoc.name}
          className="w-full h-full mt-[100vh] object-cover transition-opacity duration-500 ease-in-out opacity-0 absolute"
        />
      </div>

      {/* Right side - Snap Sections */}
      <div className="w-full md:w-2/3 ml-0 md:ml-[33%]">
        {/* Director Section */}
        <div ref={directorRef} className="h-screen p-8 snap-start snap-always">
          <div className="md:hidden flex justify-center mb-4">
            <img
              src={director.photo}
              alt={director.name}
              className="w-40 h-40 object-cover rounded-full"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{director.name}</h1>
          <h2 className="text-xl md:text-2xl text-gray-500">
            {director.title}
          </h2>
          <p className="mt-4 text-md md:text-lg">{director.bio}</p>
          <div className="mt-6">
            <h3 className="text-lg md:text-xl font-semibold">Research Areas</h3>
            <ul className="list-disc list-inside mt-2">
              {director.researchAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Spacer between sections */}
        <div className="h-12"></div>

        {/* Postdoc Section */}
        <div ref={postdocRef} className="h-screen p-8 snap-start snap-always">
          <div className="md:hidden flex justify-center mb-4">
            <img
              src={postdoc.photo}
              alt={postdoc.name}
              className="w-40 h-40 object-cover rounded-full"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{postdoc.name}</h1>
          <h2 className="text-xl md:text-2xl text-gray-500">{postdoc.title}</h2>
          <p className="mt-4 text-md md:text-lg">{postdoc.bio}</p>
          <div className="mt-6">
            <h3 className="text-lg md:text-xl font-semibold">Research Areas</h3>
            <ul className="list-disc list-inside mt-2">
              {postdoc.researchAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTrapSection;
