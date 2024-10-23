'use client';

import { CiDark, CiLight } from "react-icons/ci";
import { Button } from "../ui/button";
import { useEffect, useState } from 'react';

function ToggleTheme() {
  const [theme, setTheme] = useState<string>(() => {
    
    if (typeof window !== 'undefined') {
      return document.documentElement.getAttribute('data-theme') || 'light';
    }
    return 'light';
  });

  const toggleTheme = (newTheme: string) => {
    const html = document.documentElement;

    if (newTheme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      setTheme('dark');
    } else {
      html.setAttribute('data-theme', 'light');
      setTheme('light');
    }
  };

  return (
    <div className="grid place-items-center">
      {theme === 'light' ? (
        <Button className="rounded-xl bg-gray-200 dark:bg-[#2A2A40] " onClick={() => toggleTheme('dark')}>
          <CiDark className="w-6 h-6 md:h-7 md:w-7 lg:h-8 lg:w-8 " size={27} />
        </Button>
      ) : (
        <Button className="rounded-xl bg-gray-200 dark:bg-[#2A2A40]" onClick={() => toggleTheme('light')}>
          <CiLight className="w-6 h-6 md:h-7 md:w-7 lg:h-8 lg:w-8" size={27} />
        </Button>
      )}
    </div>
  );
}

export default ToggleTheme;
