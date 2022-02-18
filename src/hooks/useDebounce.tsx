import { useEffect, useState } from 'react';

const useDebounce = (filter: string, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedValue(filter);
    }, delay || 1000);
    return () => clearTimeout(timeoutId);
  }, [filter]);

  return debouncedValue;
};

export default useDebounce;
