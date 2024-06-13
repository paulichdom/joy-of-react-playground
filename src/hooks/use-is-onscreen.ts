import React from "react";


function useIsOnscreen() {
  const [isOnscreen, setIsOnscreen] = React.useState(false);
  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsOnscreen(entry.isIntersecting);
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return [isOnscreen, elementRef];
}

export default useIsOnscreen;
