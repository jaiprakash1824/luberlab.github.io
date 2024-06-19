import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const savedPosition = sessionStorage.getItem(`scrollPosition-${pathname}`);

    if (navigationType === "POP" && savedPosition) {
      // Restore scroll position on backward/forward navigation
      window.scrollTo(0, parseInt(savedPosition, 10));
    } else {
      // Scroll to top on new route navigation
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        `scrollPosition-${pathname}`,
        window.scrollY.toString()
      );
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      saveScrollPosition();
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
