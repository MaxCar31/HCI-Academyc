// FILE: useLoadingAnimation.ts
import { useState, useEffect } from 'react';

export function useLoadingAnimation() {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Duration of the loading animation

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return { isLoading, startLoading, stopLoading };
}