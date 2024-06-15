import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handlePopState = () => {
      const savedPosition = sessionStorage.getItem(pathname);
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  useEffect(() => {
    const savePosition = () => {
      sessionStorage.setItem(pathname, window.scrollY.toString());
    };

    window.addEventListener("beforeunload", savePosition);

    return () => {
      window.removeEventListener("beforeunload", savePosition);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
