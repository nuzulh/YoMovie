import { useEffect, useState } from 'react';

export function useDebounceValue<T>(originalValue: T, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(originalValue);

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedValue(originalValue);
    }, delay);

    return () => clearTimeout(t);
  }, [originalValue]);

  return debouncedValue;
}
