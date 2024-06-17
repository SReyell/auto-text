// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      setTimeout(() => {
        window.location.href = `sms:888222&body=${encodeURIComponent(code)}`;
      }, 500); // Adjust time as needed
    }
  }, [code]);
  

  return null;  // Render nothing to the DOM
}
