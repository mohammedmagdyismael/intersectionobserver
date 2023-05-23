/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';

export const useIntersection = (ref, callback) => {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  });

  return ref.current;
};
