import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver(callback, options) {
  const observer = useRef(null);
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, options);

    const { current: currentObserver } = observer;
    elements.forEach(element => {
      if (element) {
        currentObserver.observe(element);
      }
    });

    return () => currentObserver.disconnect();
  }, [elements, callback, options]);

  return [setElements, entries];
}

export default useIntersectionObserver;

