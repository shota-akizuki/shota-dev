import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import DarkIcon from '../components/svgs/darkicon';
import LightIcon from '../components/svgs/lighticon';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {mounted && theme === 'dark' ? (
        <DarkIcon style={{ height: 16 }} />
      ) : (
        <LightIcon style={{ height: 16 }} />
      )}
    </button>
  );
};

export default ThemeChanger;
