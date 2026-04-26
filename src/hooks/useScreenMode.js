import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

export default function useScreenMode() {
  const getMode = () => (window.innerWidth <= MOBILE_BREAKPOINT ? 'ios' : 'xp');
  const [mode, setMode] = useState(getMode);

  useEffect(() => {
    const handleResize = () => setMode(getMode());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mode;
}
