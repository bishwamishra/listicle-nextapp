import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(null);
  const checkScreenSize = () => {
    if (window.innerWidth < 875) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return {
    isMobile,
  };
};

export default useIsMobile;
