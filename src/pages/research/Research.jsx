import React, { useState, useEffect, useRef, useCallback } from "react";
import { Carousel } from 'antd';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import 'antd/dist/reset.css';

import { ResearchProvider } from "../../context/ResearchContext.jsx";
import ResearchCarouselOne from "../../components/research/ResearchCarouselOne.jsx";
import ResearchCarouselTwo from "../../components/research/ResearchCarouselTwo.jsx";
import ResearchCarouselThree from "../../components/research/ResearchCarouselThree.jsx";

const ResearchContent = () => {
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;
  const [lastInvocation, setLastInvocation] = useState(0);
  const particlesContainerRef = useRef(null);
  const isTransitioning = useRef(false);

  const handleScroll = useCallback((event) => {
    const now = Date.now();
    const throttleTime = 600; // Adjusted to 500ms to avoid too rapid scrolling

    if (now - lastInvocation > throttleTime && !isTransitioning.current) {
      event.preventDefault();
      const scrollDirection = event.deltaY;
      let newIndex = activeIndex;

      if (scrollDirection > 0 && activeIndex < totalSlides - 1) {
        newIndex = activeIndex + 1;
        carouselRef.current.next();
      } else if (scrollDirection < 0 && activeIndex > 0) {
        newIndex = activeIndex - 1;
        carouselRef.current.prev();
      }

      if (newIndex !== activeIndex) {
        isTransitioning.current = true;
        setActiveIndex(newIndex);
        if (particlesContainerRef.current) {
          particlesContainerRef.current.style.opacity = '0';
        }
      }

      setLastInvocation(now);
    }
  }, [activeIndex, lastInvocation, totalSlides]);

  useEffect(() => {
    const carouselElement = document.querySelector('.ant-carousel');
    carouselElement.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      carouselElement.removeEventListener('wheel', handleScroll);
    };
  }, [handleScroll]);

  const onChange = useCallback((currentSlide) => {
    setActiveIndex(currentSlide);
    if (particlesContainerRef.current) {
      particlesContainerRef.current.style.opacity = '0';
      setTimeout(() => {
        particlesContainerRef.current.style.opacity = '1';
        isTransitioning.current = false;
      }, 10); // Adjust the delay to match the transition duration
    }
  }, []);

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const particlesOptions = {
    fullScreen: { enable: false, zIndex: 1 },
    particles: {
      number: { value: 100, density: { enable: true, value_area: 1000 } },
      color: { value: ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"] },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: 2, random: true },
      links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1.5 }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div
        ref={particlesContainerRef}
        className="absolute top-0 right-0 w-full h-full overflow-hidden transition-all duration-100"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute top-0 right-0 w-1/2 h-full z-10"
        />
      </div>
      <Carousel
        ref={carouselRef}
        dots={true}
        vertical
        afterChange={onChange}
        effect="scroll"
        speed={1200}
      >
        <div>
          <ResearchCarouselOne isActive={activeIndex === 0} />
        </div>
        <div>
          <ResearchCarouselTwo isActive={activeIndex === 1} />
        </div>
        <div>
          <ResearchCarouselThree isActive={activeIndex === 2} />
        </div>
      </Carousel>
    </div>
  );
};

const Research = () => {
  return (
    <ResearchProvider>
      <div className="font-bricky">
        <ResearchContent />
      </div>
    </ResearchProvider>
  );
};

export default Research;
