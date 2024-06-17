// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const link = document.createElement('a');
      link.href = `sms:888222?body=${encodeURIComponent(code)}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [code]);
  
  

  return null;  // Render nothing to the DOM
}
