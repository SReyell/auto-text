// pages/index.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      window.history.pushState({ path: `sms:888222&body=${encodeURIComponent(code)}` }, '', `sms:888222&body=${encodeURIComponent(code)}`);
      window.location.replace(`sms:888222&body=${encodeURIComponent(code)}`);
    }
  }, [code]);
  
  

  return null;  // Render nothing to the DOM
}
