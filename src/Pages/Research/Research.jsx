import React from 'react';
import { useState, useEffect , useRef,useCallback} from 'react';
import { Carousel } from 'antd';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import 'antd/dist/reset.css'; // Make sure this is correctly imported
import './Research.css';  // Your custom styles
import ResearchCarouselOne from './ResearchCarouselOne';
import ResearchCarouselTwo from './ResearchCarouselTwo';
import ResearchCarouselThree from './ResearchCarouselThree';

const ResearchPage = () => {
  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;
  const [lastInvocation, setLastInvocation] = useState(0);
  const particlesContainerRef = useRef(null);
  const isTransitioning = useRef(false);

  const handleScroll = useCallback((event) => {
    const now = Date.now();
    const throttleTime = 0.1;
  
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
      }, 0); // The delay here is minimal to trigger browser re-render
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
      shape: { type: "circle", stroke: { width: 0, color: "#fff" }, polygon: { nb_sides: 5 } },
      opacity: { value: 0.6, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 2, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
      links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false } }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: false }, resize: true },
      modes: {
        grab: { distance: 140, links: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true,
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: 'black' }}>
      <div 
        ref={particlesContainerRef}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          overflow: "hidden",
          transition: 'transform 0.1s ease-in-out, opacity 0.1s ease-out 0.1s',
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
      </div>
      <Carousel
        ref={carouselRef}
        dots={true}
        vertical
        afterChange={onChange}
        effect="fade"
      >
        <div className={`animated-section ${activeIndex === 0 ? 'active' : ''}`}>
          <ResearchCarouselOne />
        </div>
        <div className={`animated-section ${activeIndex === 1 ? 'active' : ''}`}>
          <ResearchCarouselTwo />
        </div>
        <div className={`animated-section ${activeIndex === 2 ? 'active' : ''}`}>
          <ResearchCarouselThree />
        </div>
      </Carousel>
    </div>
  );
};

export default ResearchPage;




