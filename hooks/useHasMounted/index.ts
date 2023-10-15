import { useEffect, useState } from 'react';

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    return () => {
      setHasMounted(false);
    };
  }, []);

  return hasMounted;
}

export default useHasMounted;
