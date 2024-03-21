import { useState } from 'react';

export const useStatus = <T>() => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<T | null>(null);

  return {
    reset: () => {
      setIsLoading(false);
      setError('');
      setData(null);
    },
    data,
    error,
    isLoading,
    setData,
    setError,
    setIsLoading,
  };
};
